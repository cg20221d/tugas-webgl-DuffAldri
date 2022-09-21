function main() {
    var canvas = document.getElementById("canvas");
    var gl = canvas.getContext("webgl");

    // Warna canvas-nya
    gl.clearColor(0.1, 0.1, 0.1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Koordinat titik-titik
    var vertices = [
        // // Angka 1 - 0 - 10, n = 11
        -0.4825, -0.132,
        -0.465, -0.066,
        -0.665, -0.066,
        -0.5175, 0.53,
        -0.5775, 0.53,
        -0.6275, 0.43,
        -0.5925, 0.43,
        -0.715, -0.066,
        -0.805, -0.066,
        -0.8215, -0.132,

        // // Angka 7
        -0.45, 0,
        -0.25, 0.8,
        -0.60, 0.8,
        -0.60, 0.6,
        -0.45, 0.6,
        -0.60, 0,
        -0.55, 0,
        -0.385, 0.66,
        -0.55, 0.66,
        -0.55, 0.72,
        -0.32, 0.72,
        -0.5, 0,

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
        0.20325, 0.23,

        // Mata kucing, tengah = -0.05, -0.08
        -0.07, -0.05,
        -0.11, -0.05,
        -0.11, -0.1,
        -0.07, -0.1,

        -0.03, -0.05,
        0.01, -0.05,
        0.01, -0.1,
        -0.03, -0.1,
        
        // Mulut kucing
        -0.09, -0.125,
        -0.09, -0.155,
        -0.055, -0.155,
        -0.055, -0.125,
        -0.055, -0.155,
        -0.018, -0.155,
        -0.018, -0.125 

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Vertex shader
    var vertexShaderCode = `
        attribute vec2 aPosition;
        varying vec2 position;
        void main() {
            position = aPosition;
            gl_PointSize = 20.0;
            gl_Position = vec4(aPosition.x + 0.125, aPosition.y - 0.2775, 0, 1);
        }
    `;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject);
    
    // Fragment shader
    var fragmentShaderCode = `
        precision mediump float;
        varying vec2 position;

        // float colorValue (float pos, float minValue, float maxValue) {
        //     return (maxValue - minValue) * pos.x + minValue;
        // }

        void main() {
            
            float r = (position.x + position.y)/2.0 + 0.4;
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
    
    gl.drawArrays(gl.LINE_LOOP, 0, 10);
    gl.drawArrays(gl.LINE_LOOP, 10, 12);
    // // gl.drawArrays(gl.LINE_LOOP, 11, 7);
    gl.drawArrays(gl.TRIANGLE_STRIP, 22, 17);
    gl.drawArrays(gl.TRIANGLE_STRIP, 39, 4);
    gl.drawArrays(gl.TRIANGLE_STRIP, 43, 7);
    gl.drawArrays(gl.TRIANGLE_FAN, 50, 4);
    gl.drawArrays(gl.TRIANGLE_FAN, 54, 4);
    gl.drawArrays(gl.LINE_STRIP, 58, 7);
}

window.onload = main;