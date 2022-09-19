function main() {
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");

    // Warna canvas-nya
    gl.clearColor(1, 0, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Koordinat titik-titik
    var vertices = [
        // Angka 1 - 0 - 10, n = 11
        -0.85, 0.0,
        -0.35, 0.0,
        -0.35, 0.2,
        -0.5, 0.2,
        -0.5, 0.8,
        -0.7, 0.8,
        -0.85, 0.7,
        -0.85, 0.5,
        -0.7, 0.6,
        -0.7, 0.2,
        -0.85, 0.2,

        // Angka 7 - 11 - 17, n = 7
        -0.2, 0,
        0, 0,
        0.2, 0.6,
        0.2, 0.8,
        -0.3, 0.8,
        -0.3, 0.6,
        0, 0.6,

        // Huruf M - 18 - 31. n = 15
        -0.8375, -0.15,
        -0.6375, -0.15,
        -0.6, 0.8, // Kiri atas
        -0.5, 0.4, // Tengah kiri
        -0.4, 0.8,
        -0.4, 0.0,
        -0.3, 0.3, // Bagian tengah M
        -0.2, 0.0,
        -0.2, 0.8,
        -0.1, 0.4, // Tengah kanan
        0, 0.8, // Kanan atas
        0, 0,
        // 0.2, 0, // Kanan bawah
        0.15, 0.2,
        0.55, 0,
        0.7, 0.2,
        0.5875, -0.15,
        0.7875, -0.15,
        
        0.1125, -0.15,
        0.3125, -0.15,
        0.1425, -0.03,
        0.3425, -0.03,

        // Huruf A - 32 - 38, n = 7
        0.6925, 0.23,
        0.4925, 0.23,
        0.55, 0.8,
        0.45, 0.4, // Tengah
        0.35, 0.8,
        0.4075, 0.23,
        0.2075, 0.23

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

    // gl.drawArrays(gl.LINE_LOOP, 0, 11);
    // gl.drawArrays(gl.LINE_LOOP, 11, 7);
    gl.drawArrays(gl.TRIANGLE_STRIP, 18, 17);
    gl.drawArrays(gl.TRIANGLE_STRIP, 35, 4);
    gl.drawArrays(gl.TRIANGLE_STRIP, 39, 7);
}

window.onload = main;