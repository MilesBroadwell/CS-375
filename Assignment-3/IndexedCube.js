/////////////////////////////////////////////////////////////////////////////
//
//  IndexedCube.js
//
//  A cube defined of 12 triangles using vertex indices.
//

class IndexedCube {
    constructor(gl, vertexShader, fragmentShader) {
        
        vertexShader ||= `
            uniform mat4 P;  // Projection transformation
            uniform mat4 MV; // Model-view transformation

            in vec4 aColor;
            out vec4 vColor;

            in vec4 aPosition;

            void main() {

                vColor = aColor;
                gl_Position = P * MV * aPosition;
            }
        `;

        fragmentShader ||= `
            in vec4 vColor;
            out vec4 fColor;

            void main() {
                fColor = vColor;
            }
        `;

        let program = new ShaderProgram(gl, this, vertexShader, fragmentShader);

        // (r, g, b) as unsigned bytes (chars)
        let colors = new Uint8Array([
            
            1, 0, 0,
            0, 1, 0,
            0, 0, 1,
            1, 1, 0,

            1, 0, 1,
            0, 1, 1,
            0, 0, 0,
            1, 1, 1
            
        ]);

        let aColor = new Attribute(gl, program, "aColor",
            colors, 3, gl.UNSIGNED_BYTE);

        let positions = new Float32Array([
            -0.5, -0.5, -0.5,
            -0.5, -0.5, 0.5,
            -0.5, 0.5, -0.5,
            -0.5, 0.5, 0.5,

            0.5, -0.5, -0.5,
            0.5, -0.5, 0.5,
            0.5, 0.5, -0.5,
            0.5, 0.5, 0.5
        ]);

        let aPosition = new Attribute(gl, program, "aPosition", 
            positions, 3, gl.FLOAT);

        let indices = new Uint8Array([
            // Left Side
            2, 0, 3,
            3, 0, 1,

            // Right 
            7, 4, 6,
            5, 4, 7,

            // Back
            3, 5, 7,
            1, 5, 3,
            
            // Front
            6, 0, 2,
            4, 0, 6,
            
            // Bottom
            1, 0, 5,
            5, 0, 4,

            // Top
            7, 2, 3,
            6, 2, 7
        ]);

        indices = new Indices(gl, indices);

        this.draw = () => {
            program.use();
            program.MV;
            program.P;

            indices.enable();

            aPosition.enable();
            aColor.enable();

            gl.drawElements(gl.TRIANGLES, indices.count,indices.type, 0);

            aPosition.disable();
            aColor.disable();

            indices.disable();
        };
    }
};
