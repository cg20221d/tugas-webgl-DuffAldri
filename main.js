function main() {
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");

    // Warna canvas-nya

    // Koordinat titik-titik
    var verticesA = [
        // Depan
        // Huruf A strip tengah & kaki kanan | 34 - 38. n = 5
        1.3, 0, 0,              1, 0, 1, // Index: 0
        1.525, 0.6, 0,          1, 0, 1, // Index: 1
        2.125, 0, 0,            1, 0, 1, // Index: 2
        2.35, 0.6, 0,           1, 0, 1, // Index: 3
        2.18125, -0.45, 0,      1, 0, 1, // Index: 4
        2.48125, -0.45, 0,      1, 0, 1, // Index: 5
        
        // Kaki A kaki kiri kiri | 39 - 42, n = 4
        1.46875, -0.45, 0,      1, 0, 1, // Index: 6
        1.76875, -0.45, 0,      1, 0, 1, // Index: 7
        1.51375, -0.09, 0,      1, 0, 1, // Index: 8
        1.81375, -0.09, 0,      1, 0, 1, // Index: 9

        // Huruf A bagian atas | 43 - 49, n = 7
        2.33875, 0.69, 0,       1, 0, 1, // Index: 10
        2.03875, 0.69, 0,       1, 0, 1, // Index: 11
        2.125, 2.4, 0,          1, 0, 1, // Index: 12
        1.978, 1.2, 0,          1, 0, 1, // Index: 13
        1.825, 2.4, 0,          1, 0, 1, // Index: 14
        1.91125, 0.69, 0,       1, 0, 1, // Index: 15
        1.60975, 0.69, 0,       1, 0, 1, // Index: 16

        // Belakang
        // Huruf A strip tengah & kaki kanan | 34 - 38. n = 5
        1.3, 0, -1.0,           0.5, 0, 0.5, // Index: 17
        1.525, 0.6, -1.0,       0.5, 0, 0.5, // Index: 18
        2.125, 0, -1.0,         0.5, 0, 0.5, // Index: 19
        2.35, 0.6, -1.0,        0.5, 0, 0.5, // Index: 20
        2.18125, -0.45, -1.0,   0.5, 0, 0.5, // Index: 21
        2.48125, -0.45, -1.0,   0.5, 0, 0.5, // Index: 22
        
        // Kaki A kaki kiri kiri | 39 - 42, n = 4
        1.46875, -0.45, -1.0,   0.5, 0, 0.5, // Index: 23
        1.76875, -0.45, -1.0,   0.5, 0, 0.5, // Index: 24
        1.51375, -0.09, -1.0,   0.5, 0, 0.5, // Index: 25
        1.81375, -0.09, -1.0,   0.5, 0, 0.5, // Index: 26

        // Huruf A bagian atas | 43 - 49, n = 7
        2.33875, 0.69, -1.0,    0.5, 0, 0.5, // Index: 27
        2.03875, 0.69, -1.0,    0.5, 0, 0.5, // Index: 28
        2.125, 2.4, -1.0,       0.5, 0, 0.5, // Index: 29
        1.978, 1.2, -1.0,       0.5, 0, 0.5, // Index: 30
        1.825, 2.4, -1.0,       0.5, 0, 0.5, // Index: 31
        1.91125, 0.69, -1.0,    0.5, 0, 0.5, // Index: 32
        1.60975, 0.69, -1.0,    0.5, 0, 0.5, // Index: 33
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

    var verticesCube = [
        // Depan
        0.5, 0.5, 0.5,    0, 0, 1,      // 0 Atas kanan
        0.5, -0.5, 0.5,    0, 0, 1,     // 0.5 Bawah Kanan
        -0.5, -0.5, 0.5,    0, 0, 1,    // 2 Bawah Kiri
        -0.5, 0.5, 0.5,   0, 0, 1,      // 3 Atas kiri

        // Belakang
        0.5, 0.5, -0.5,    0, 0, 1,      // 4 Atas kanan
        0.5, -0.5, -0.5,    0, 0, 1,     // 5 Bawah Kanan
        -0.5, -0.5, -0.5,    0, 0, 1,    // 6 Bawah Kiri
        -0.5, 0.5, -0.5,   0, 0, 1,      // 7 Atas kiri
    ]

    var indicesCube = [
        // Depan
        0, 1, 2,    2, 3, 0,
        // Belakang
        4, 5, 6,    6, 7, 4,
        // Kiri
        2, 3, 6,     3, 6, 7,
        // Kanan
        0, 1, 5,     0, 4, 5,
        // Atas
        0, 3, 7,      0, 4, 7,
        // Bawah
        1, 2, 5,    2, 5, 6
    ];

    var objects = [
        {
            name: 'A',
            vertices: verticesA,
            indices: indicesA,
            length: 20,
            type: gl.TRIANGLES,
        },
        {
            name: '7',
            vertices: vertices7,
            indices: indices7,
            length: 24,
            type: gl.LINES,
        },
        {
            name: 'Cube',
            vertices: verticesCube,
            indices: indicesCube,
            length: 4,
            type: gl.TRIANGLES,
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
        uniform vec3 uAmbientConstant;
        uniform float uAmbientIntensity;

        void main() {
            vec3 ambient = uAmbientConstant * uAmbientIntensity;
            vec3 phong = ambient;
            gl_FragColor = vec4(phong * vColor, 1.0);
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
    var moveZ = 0.0;
    var moveX = 0.0;
    var freeze = false;
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

    var uAmbientConstant = gl.getUniformLocation(shaderProgram, "uAmbientConstant");
    var uAmbientIntensity = gl.getUniformLocation(shaderProgram, "uAmbientIntensity");
    gl.uniform3fv(uAmbientConstant, [1.0, 1.0, 1.0]);
    gl.uniform1f(uAmbientIntensity, 0.177);

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

        if (event.keyCode == 75) { // Depan
            moveZ += 0.1
        }
        else if (event.keyCode == 73) {  // Belakang
            moveZ += -0.1;
        }
        if (event.keyCode == 76) { // Depan
            moveX += 0.1
        }
        else if (event.keyCode == 74) {  // Belakang
            moveX += -0.1;
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
        gl.clearColor(0.7, 0.7, 0.7, 1);
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

        draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
        
        var model7 = mat4.create(); 

        if (scaleDelta >= 2 || scaleDelta <= -0.5) {
            scaleSpeed = scaleSpeed * -1;
        }
        
        scaleDelta += scaleSpeed;

        mat4.translate(model7, model7, [0, 0, scaleDelta]);

        gl.uniformMatrix4fv(uModel, false, model7);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
        

        // Cube
        var modelCube = mat4.create(); 

        mat4.translate(modelCube, modelCube, [moveX, 0, moveZ]);

        gl.uniformMatrix4fv(uModel, false, modelCube);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

window.onload = main;