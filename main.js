function main() {
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");

    // Warna canvas-nya

    // Koordinat titik-titik
    var verticesM = [
        // Huruf M bagian depan | 22 - 35, n = 13
        -0.95625, -0.45, 0,     1, 0, 1, // Index: 0
        -0.65625, -0.45, 0,     1, 0, 1, // Index: 1
        -0.6, 2.4, 0,           1, 0, 1, // Index: 2 Kiri atas
        -0.45, 1.2, 0,          1, 0, 1, // Index: 3 Tengah kiri
        -0.3, 2.4, 0,           1, 0, 1, // Index: 4
        -0.3, 0.0, 0,           1, 0, 1, // Index: 5
        -0.15, 0.9, 0,          1, 0, 1, // Index 6 Bagian tengah M
        -0, 0.0, 0,             1, 0, 1, // Index: 7
        -0, 2.4, 0,             1, 0, 1, // Index: 8
        0.15, 1.2, 0,           1, 0, 1, // Index: 9 Tengah kanan
        0.3, 2.4, 0,            1, 0, 1, // Index: 10 Kanan atas
        0.3, 0, 0,              1, 0, 1, // Index: 11
        0.525, 0.6, 0,          1, 0, 1, // Index: 12 Kanan bawah, perbatasan dengan A
        
        // Huruf M bagian belakang | 22 - 35, n = 13
        -0.95625, -0.45, -1.0,     0.5, 0, 0.5, // Index: 13
        -0.65625, -0.45, -1.0,     0.5, 0, 0.5, // Index: 14
        -0.6, 2.4, -1.0,           0.5, 0, 0.5, // Index: 15 Kiri atas
        -0.45, 1.2, -1.0,          0.5, 0, 0.5, // Index: 16 Tengah kiri
        -0.3, 2.4, -1.0,           0.5, 0, 0.5, // Index: 17
        -0.3, 0.0, -1.0,           0.5, 0, 0.5, // Index: 18
        -0.15, 0.9, -1.0,          0.5, 0, 0.5, // Index: 19 Bagian tengah M
        -0, 0.0, -1.0,             0.5, 0, 0.5, // Index: 20
        -0, 2.4, -1.0,             0.5, 0, 0.5, // Index: 21
        0.15, 1.2, -1.0,           0.5, 0, 0.5, // Index: 22 Tengah kanan
        0.3, 2.4, -1.0,            0.5, 0, 0.5, // Index: 23 Kanan atas
        0.3, 0, -1.0,              0.5, 0, 0.5, // Index: 24
        0.525, 0.6, -1.0,          0.5, 0, 0.5, // Index: 25 Kanan bawah, perbatasan dengan A
    ];

    var indicesM = [
        // Depan
        0, 1, 2,    1, 2, 3,    2, 3, 4,    3, 4, 5,
        4, 5, 6,    5, 6, 7,    6, 7, 8,    7, 8, 9,
        8, 9, 10,   9, 10, 11,  10, 11, 12, 
        
        // Belakang
        13, 14, 15,     14, 15, 16,     15, 16, 17,
        16, 17, 18,     17, 18, 19,     18, 19, 20,
        19, 20, 21,     20, 21, 22,     21, 22, 23,
        22, 23, 24,     23, 24, 25, 

        // Sisi
        0, 13, 15,
        0, 2, 15,
        2, 15, 4,
        15, 17, 4,
        4, 17, 19,
        4, 19, 6,
        6, 19, 8,
        19, 8, 21,
        21, 8, 23,
        8, 23, 10,
        23, 10, 12,
        23, 12, 25,
        25, 12, 24,
        12, 24, 11,
        24, 11, 9,
        24, 9, 22,
        22, 9, 20,
        20, 9, 7,
        20, 7, 5,
        20, 18, 5,
        18, 5, 16,
        5, 16, 3,
        16, 3, 1,
        16, 1, 14,
        1, 13, 14,
        0, 1, 13
    ];
    var verticesA = [
        // Depan
        // Huruf A strip tengah & kaki kanan | 34 - 38. n = 5
        0.3, 0, 0,              1, 0, 1, // Index: 0
        0.525, 0.6, 0,          1, 0, 1, // Index: 1
        1.125, 0, 0,            1, 0, 1, // Index: 2
        1.35, 0.6, 0,           1, 0, 1, // Index: 3
        1.18125, -0.45, 0,      1, 0, 1, // Index: 4
        1.48125, -0.45, 0,      1, 0, 1, // Index: 5
        
        // Kaki A kaki kiri kiri | 39 - 42, n = 4
        0.46875, -0.45, 0,      1, 0, 1, // Index: 6
        0.76875, -0.45, 0,      1, 0, 1, // Index: 7
        0.51375, -0.09, 0,      1, 0, 1, // Index: 8
        0.81375, -0.09, 0,      1, 0, 1, // Index: 9

        // Huruf A bagian atas | 43 - 49, n = 7
        1.33875, 0.69, 0,       1, 0, 1, // Index: 10
        1.03875, 0.69, 0,       1, 0, 1, // Index: 11
        1.125, 2.4, 0,          1, 0, 1, // Index: 12
        0.978, 1.2, 0,          1, 0, 1, // Index: 13
        0.825, 2.4, 0,          1, 0, 1, // Index: 14
        0.91125, 0.69, 0,       1, 0, 1, // Index: 15
        0.60975, 0.69, 0,       1, 0, 1, // Index: 16

        // Belakang
        // Huruf A strip tengah & kaki kanan | 34 - 38. n = 5
        0.3, 0, -1.0,           0.5, 0, 0.5, // Index: 17
        0.525, 0.6, -1.0,       0.5, 0, 0.5, // Index: 18
        1.125, 0, -1.0,         0.5, 0, 0.5, // Index: 19
        1.35, 0.6, -1.0,        0.5, 0, 0.5, // Index: 20
        1.18125, -0.45, -1.0,   0.5, 0, 0.5, // Index: 21
        1.48125, -0.45, -1.0,   0.5, 0, 0.5, // Index: 22
        
        // Kaki A kaki kiri kiri | 39 - 42, n = 4
        0.46875, -0.45, -1.0,   0.5, 0, 0.5, // Index: 23
        0.76875, -0.45, -1.0,   0.5, 0, 0.5, // Index: 24
        0.51375, -0.09, -1.0,   0.5, 0, 0.5, // Index: 25
        0.81375, -0.09, -1.0,   0.5, 0, 0.5, // Index: 26

        // Huruf A bagian atas | 43 - 49, n = 7
        1.33875, 0.69, -1.0,    0.5, 0, 0.5, // Index: 27
        1.03875, 0.69, -1.0,    0.5, 0, 0.5, // Index: 28
        1.125, 2.4, -1.0,       0.5, 0, 0.5, // Index: 29
        0.978, 1.2, -1.0,       0.5, 0, 0.5, // Index: 30
        0.825, 2.4, -1.0,       0.5, 0, 0.5, // Index: 31
        0.91125, 0.69, -1.0,    0.5, 0, 0.5, // Index: 32
        0.60975, 0.69, -1.0,    0.5, 0, 0.5, // Index: 33
    ];

    var indicesA = [
        // Depan
        // Huruf A strip tengah & kaki kanan
        0, 1, 2,    1, 2, 3,    2, 3, 4,    3, 4, 5,

        // Kaki A kaki kiri kiri
        6, 7, 8,        7, 8, 9,

        // Huruf A bagian atas
        10, 11, 12,     11, 12, 13,
        12, 13, 14,     13, 14, 15, 
        14, 15, 16,     

        // Belakang
        // Huruf A strip tengah & kaki kanan
        17, 18, 19,    18, 19, 20,    19, 20, 21,    20, 21, 22,

        // Kaki A kaki kiri kiri
        23, 24, 25,        24, 25, 26,

        // Huruf A bagian atas
        27, 28, 29,     28, 29, 30,
        29, 30, 31,     30, 31, 32,
        31, 32, 33,  

        // Sisi
        // Huruf A strip tengah & kaki kanan
        17, 19, 0,      19, 0, 2,    
        19, 2, 4,       19, 4, 21,
        21, 4, 22,      4, 22, 5,
        5, 22, 3,       22, 3, 20,
        20, 3, 18,      3, 18, 1,
        18, 1, 0,       18, 17, 0,     

        // Kaki A kaki kiri kiri
        6, 7, 24,   6, 23, 24,
        6, 23, 25,  6, 25, 8,
        25, 8, 9,   25, 26, 9,
        9, 26, 24,  9, 24, 7,

        // Huruf A bagian atas
        15, 16, 32,  16, 32, 33,
        16, 33, 31,  16, 14, 31,
        31, 14, 12,  31, 12, 29,
        12, 27, 29,  12, 27, 10,
        27, 11, 10,  27, 11, 28,
        11, 30, 28,  11, 30, 13,
        30, 15, 13,  30, 15, 32,

    ];

    var vertices1 = [
        // Depan
        -1.447500, -0.396000, 0,                1, 0, 1,
        -1.395000, -0.198000, 0,                1, 0, 1,
        -1.995000, -0.198000, 0,                1, 0, 1,
        -1.552500, 1.590000, 0,         1, 0, 1,
        -1.732500, 1.590000, 0,         1, 0, 1,
        -1.882500, 1.290000, 0,         1, 0, 1,
        -1.777500, 1.290000, 0,         1, 0, 1,
        -2.145000, -0.198000, 0,                1, 0, 1,
        -2.415000, -0.198000, 0,                1, 0, 1,
        -2.464500, -0.396000, 0,                1, 0, 1,
        // Belakang
        -1.447500, -0.396000, -1,               0.5, 0, 0.5,
        -1.395000, -0.198000, -1,               0.5, 0, 0.5,
        -1.995000, -0.198000, -1,               0.5, 0, 0.5,
        -1.552500, 1.590000, -1,                0.5, 0, 0.5,
        -1.732500, 1.590000, -1,                0.5, 0, 0.5,
        -1.882500, 1.290000, -1,                0.5, 0, 0.5,
        -1.777500, 1.290000, -1,                0.5, 0, 0.5,
        -2.145000, -0.198000, -1,               0.5, 0, 0.5,
        -2.415000, -0.198000, -1,               0.5, 0, 0.5,
        -2.464500, -0.396000, -1,               0.5, 0, 0.5,

    ];

    var indices1 = [
        // Depan
        0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 0,

        // Belakang
        10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 10
        // Sisi
    ];

    var vertices7 = [
        // Depan
        -1.350000, 0.000000, 0,         1, 0, 1,
        -0.750000, 2.400000, 0,         1, 0, 1,
        -1.800000, 2.400000, 0,         1, 0, 1,
        -1.800000, 1.800000, 0,         1, 0, 1,
        -1.350000, 1.800000, 0,         1, 0, 1,
        -1.800000, 0.000000, 0,         1, 0, 1,
        -1.650000, 0.000000, 0,         1, 0, 1,
        -1.155000, 1.980000, 0,         1, 0, 1,
        -1.650000, 1.980000, 0,         1, 0, 1,
        -1.650000, 2.160000, 0,         1, 0, 1,
        -0.960000, 2.160000, 0,         1, 0, 1,
        -1.500000, 0.000000, 0,         1, 0, 1,

        // Belakang
        -1.350000, 0.000000, -1,         0.5, 0, 0.5,
        -0.750000, 2.400000, -1,         0.5, 0, 0.5,
        -1.800000, 2.400000, -1,         0.5, 0, 0.5,
        -1.800000, 1.800000, -1,         0.5, 0, 0.5,
        -1.350000, 1.800000, -1,         0.5, 0, 0.5,
        -1.800000, 0.000000, -1,         0.5, 0, 0.5,
        -1.650000, 0.000000, -1,         0.5, 0, 0.5,
        -1.155000, 1.980000, -1,         0.5, 0, 0.5,
        -1.650000, 1.980000, -1,         0.5, 0, 0.5,
        -1.650000, 2.160000, -1,         0.5, 0, 0.5,
        -0.960000, 2.160000, -1,         0.5, 0, 0.5,
        -1.500000, 0.000000, -1,         0.5, 0, 0.5,
    ];

    var indices7 = [
        0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 0,
        12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 12
    ];

    var objects = [
        {
            name: 'M',
            vertices: verticesM,
            indices: indicesM,
            length: 48,
            type: gl.TRIANGLES,
        },
        {
            name: 'A',
            vertices: verticesA,
            indices: indicesA,
            length: 20,
            type: gl.TRIANGLES,
        },
        {
            name: '1',
            vertices: vertices1,
            indices: indices1,
            length: 20,
            type: gl.LINES,
        },
        {
            name: '7',
            vertices: vertices7,
            indices: indices7,
            length: 24,
            type: gl.LINES,
        },
    ]

    // Vertex shader
    var vertexShaderCode = `
        attribute vec3 aPosition; // Karena 3d, kita ubah vec2 jadi vec3
        attribute vec3 aColor; // Vertex Color
        uniform mat4 uModel; // model = world
        uniform mat4 uView;
        uniform mat4 uProjection;
        varying vec3 vColor; // Fragment Color

        void main() {
            gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
            vColor = aColor;
        }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);
    
    // Fragment shader
    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;

        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject);

    // Shader program
    var shaderProgram = gl.createProgram(); // Wadah dari executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var thetaX = 0.0;
    var thetaY = 0.0;
    var freeze = false;
    var horizontalSpeed = 0.0177;
    var canvasWidth = 9;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;
    var scaleSpeed = 0.05;
    var scaleDelta = 0;

    // Variabel pointer ke GLSL
    var uModel = gl.getUniformLocation(shaderProgram, "uModel");

    // View
    var cameraX = 0.0;
    var cameraZ = 7.5;
    var uView = gl.getUniformLocation(shaderProgram, "uView");
    var view = mat4.create();

    mat4.lookAt(
        view,
        [cameraX, 0.0, cameraZ], // Lokasi the eye or the camera
        [cameraX, 0.0, -10],    // The point where the camera look at
        [0.0, 1.0, 0.0]
    );

        // Projection
    var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    var perspective = mat4.create();
    mat4.perspective(perspective, Math.PI/3, 1.0, 0.5, 50.0);

    function draw(vertices, indices, start = 0, end, glType) {
        var buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

        var indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    
        // Kita mengajari GPU bagaimana caranya mengoleksi
        //  nilai posisi dari ARRAY_BUFFER
        //  untuk setiap verteks yang sedang diproses
        var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
        gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
            6 * Float32Array.BYTES_PER_ELEMENT, 
            0);
        gl.enableVertexAttribArray(aPosition);

        var aColor = gl.getAttribLocation(shaderProgram, "aColor");
        gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
            6 * Float32Array.BYTES_PER_ELEMENT, 
            3 * Float32Array.BYTES_PER_ELEMENT);
        gl.enableVertexAttribArray(aColor);  

        gl.drawElements(glType, indices.length, gl.UNSIGNED_SHORT, 0);
    }

    const translate1 = () =>{
        var model = mat4.create();
    
        if (horizontalDelta >= (canvasWidth/2+2) || horizontalDelta <= (-canvasWidth/2+2)) {
          horizontalSpeed = horizontalSpeed * -1;
        }
    
        horizontalDelta += horizontalSpeed;
    
        mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
        
        var uModel = gl.getUniformLocation(shaderProgram, "uModel");
        var uView = gl.getUniformLocation(shaderProgram, "uView");
        var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
    
        gl.uniformMatrix4fv(uModel,false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
    
        draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
      }

    function onKeydown(event) {
        if (event.keyCode == 37) { // Kiri
            thetaY += 0.1
        }
        if (event.keyCode == 39) {  // Kanan
            thetaY += -0.1;
        }
    
        if (event.keyCode == 38) {  // Atas
            thetaX += -0.1
        } else if (event.keyCode == 40) { // Bawah
            thetaX += 0.1
        }
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = !freeze;
        if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
        if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
    }


    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    function render() {
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0.125, 0.125, 0.15, 1);
        //            Merah     Hijau   Biru    Transparansi
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        var modelM = mat4.create(); // Membuat matriks identitas
        // mat4.translate(
        //     model, model, [horizontalDelta, verticalDelta, 0.0]
        // );
        mat4.rotateY(
            modelM, modelM, thetaY
        );

        gl.uniformMatrix4fv(uModel, false, modelM);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);

        var modelA = mat4.create(); // Membuat matriks identitas
        // mat4.translate(
        //     model, model, [horizontalDelta, verticalDelta, 0.0]
        // );
        mat4.rotateX(
            modelA, modelA, thetaX
        );

        gl.uniformMatrix4fv(uModel, false, modelA);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
        
        // Translation tapi gagal :(
        // var model1 = mat4.create(); // Membuat matriks identitas
        
        // if((horizontalDelta >= canvasWidth/2) || (horizontalDelta <= (canvasWidth/2)+1))
        //     horizontalSpeed = horizontalSpeed * -1;
        
        // horizontalDelta += horizontalSpeed;
        // mat4.translate(
        //     model1, model1, [horizontalDelta, verticalDelta, 0.0]
        // );

        // gl.uniformMatrix4fv(uModel, false, model1);
        // gl.uniformMatrix4fv(uView, false, view);
        // gl.uniformMatrix4fv(uProjection, false, perspective);

        // draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
        
        // Angka 7 Scaling
        var model7 = mat4.create(); 

        if (scaleDelta >= 2 || scaleDelta <= -0.5) {
            scaleSpeed = scaleSpeed * -1;
        }
        
        scaleDelta += scaleSpeed;

        mat4.translate(model7, model7, [0, 0, scaleDelta]);

        gl.uniformMatrix4fv(uModel, false, model7);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
        
        translate1();
        // scale7();

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

window.onload = main;