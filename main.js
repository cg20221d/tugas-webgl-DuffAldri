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
        -0.55, 1.2, -1.0,          0.5, 0, 0.5, // Index: 16 Tengah kiri
        -0.4, 2.4, -1.0,           0.5, 0, 0.5, // Index: 17
        -0.4, 0.0, -1.0,           0.5, 0, 0.5, // Index: 18
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
    var verticesM2 = [
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
        -0.55, 1.2, -1.0,          0.5, 0, 0.5, // Index: 16 Tengah kiri
        -0.4, 2.4, -1.0,           0.5, 0, 0.5, // Index: 17
        -0.4, 0.0, -1.0,           0.5, 0, 0.5, // Index: 18
        -0.15, 0.9, -1.0,          0.5, 0, 0.5, // Index: 19 Bagian tengah M
        -0, 0.0, -1.0,             0.5, 0, 0.5, // Index: 20
        -0, 2.4, -1.0,             0.5, 0, 0.5, // Index: 21
        0.15, 1.2, -1.0,           0.5, 0, 0.5, // Index: 22 Tengah kanan
        0.3, 2.4, -1.0,            0.5, 0, 0.5, // Index: 23 Kanan atas
        0.3, 0, -1.0,              0.5, 0, 0.5, // Index: 24
        0.525, 0.6, -1.0,          0.5, 0, 0.5, // Index: 25 Kanan bawah, perbatasan dengan A
    ];

    var indicesM2 = [
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

    var objects = [
        {
            name: 'M',
            vertices: verticesM,
            indices: indicesM,
            length: 52,
            type: gl.TRIANGLES,
        },
        {
            name: 'M2',
            vertices: verticesM2,
            indices: indicesM2,
            length: 52,
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
    var horizontalSpeed = 0.0;
    var verticalSpeed = 0.0;
    var horizontalDelta = 0.0;
    var verticalDelta = 0.0;

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
    
    function rotateM() {
        var model = mat4.create();
        mat4.rotateX(model, model, theta);

        var uModel = gl.getUniformLocation(shaderProgram, "uModel");
        var uView = gl.getUniformLocation(shaderProgram, "uView");
        
        var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);
        drawing(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
    }

    function onKeydown(event) {
        if (event.keyCode == 37) {
            thetaY += -0.1
        }
        if (event.keyCode == 39) {  // a
            thetaY += 0.1;
        }
        // Gerakan vertikal: w ke atas, s ke bawah
        if (event.keyCode == 38) {  
            thetaX += -0.1
        } else if (event.keyCode == 40) {
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

        var model = mat4.create(); // Membuat matriks identitas
        // mat4.translate(
        //     model, model, [horizontalDelta, verticalDelta, 0.0]
        // );
        mat4.rotateY(
            model, model, thetaY
        );

        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);

        var model = mat4.create(); // Membuat matriks identitas
        // mat4.translate(
        //     model, model, [horizontalDelta, verticalDelta, 0.0]
        // );
        mat4.rotateX(
            model, model, thetaX
        );

        gl.uniformMatrix4fv(uModel, false, model);
        gl.uniformMatrix4fv(uView, false, view);
        gl.uniformMatrix4fv(uProjection, false, perspective);

        draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

window.onload = main;