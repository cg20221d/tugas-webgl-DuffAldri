function main() {
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");

    // Warna canvas-nya
    gl.clearColor(0.1, 0.1, 0.1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Koordinat titik-titik
    var vertices = [
        // Angka 1 - 0 - 10, n = 11
        -0.825, 0.0,
        -0.575, 0.0,
        -0.575, 0.2,
        -0.65, 0.2,
        -0.65, 0.8,
        -0.75, 0.8,
        -0.825, 0.7,
        -0.825, 0.5,
        -0.75, 0.6,
        -0.75, 0.2,
        -0.825, 0.2,

        // Angka 7 - 11 - 17, n = 7
        -0.5, 0,
        -0.4, 0,
        -0.3, 0.6,
        -0.3, 0.8,
        -0.55, 0.8,
        -0.55, 0.6,
        -0.4, 0.6,

        // Huruf M - 18 - 31. n = 15
        -0.31875, -0.15,
        -0.21875, -0.15,
        -0.2, 0.8, // Kiri atas
        -0.15, 0.4, // Tengah kiri
        -0.1, 0.8,
        -0.1, 0.0,
        -0.05, 0.3, // Bagian tengah M
        -0, 0.0,
        -0, 0.8,
        0.05, 0.4, // Tengah kanan
        0.1, 0.8, // Kanan atas
        0.1, 0,
        // 0.2, 0, // Kanan bawah
        0.175, 0.2,
        0.375, 0,
        0.45, 0.2,
        0.39375, -0.15,
        0.49375, -0.15,
        
        0.15625, -0.15,
        0.25625, -0.15,
        0.17125, -0.03,
        0.27125, -0.03,

        // Huruf A - 32 - 38, n = 7
        0.44625, 0.23,
        0.34625, 0.23,
        0.375, 0.8,
        0.326, 0.4, // Tengah
        0.275, 0.8,
        0.30375, 0.23,
        0.20325, 0.23

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Vertex shader
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main() {
            gl_PointSize = 10.0;
            gl_Position = vec4(aPosition.xy, 0, 1);
        }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);

    // Fragment shader
    var fragmentShaderCode = `
        void main() {
            precision mediump float;
            float r = 0.0;
            float g = 0.1;
            float b = 1.0;
            gl_FragColor = vec4(r, g, b, 1);
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

    var aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.drawArrays(gl.LINE_LOOP, 0, 11);
    gl.drawArrays(gl.LINE_LOOP, 11, 7);
    gl.drawArrays(gl.TRIANGLE_STRIP, 18, 17);
    gl.drawArrays(gl.TRIANGLE_STRIP, 35, 4);
    gl.drawArrays(gl.TRIANGLE_STRIP, 39, 7);
}

window.onload = main;