/////////////////////////////////////////////////////////////////////////////
//
//  BasicCube.js
//
//  A cube defined of 12 triangles
//

class BasicCube {
    constructor(gl, vertexShader, fragmentShader) {

        vertexShader ||= `
            in vec4 aPosition;
            in vec4 aColor;
            uniform mat4 P;
            uniform mat4 MV;
            out vec4 vColor;

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

        // (x, y, z) as floats
        let positions = new Float32Array([

            // Face 1 - front
           0.5,-0.5,-0.5, // 2
           -0.5,-0.5,-0.5, // 1
           -0.5,0.5,-0.5, // 3

           0.5,-0.5,-0.5, // 2
           -0.5,0.5,-0.5, // 3
           0.5,0.5,-0.5, // 6

            // Face 2 - left
           -0.5,-0.5,-0.5, // 1
           -0.5,-0.5,0.5, // 4
           -0.5,0.5,0.5, // 7

           -0.5,-0.5,-0.5, // 1
           -0.5,0.5,0.5, // 7
           -0.5,0.5,-0.5, // 3

            // Face 3 - back
           -0.5,-0.5,0.5,  // 4
           0.5,0.5,0.5, // 8
           -0.5,0.5,0.5, // 7

           -0.5,-0.5,0.5,  // 4
           0.5,-0.5,0.5, // 5
           0.5,0.5,0.5, // 8
            
            // Face 4 - right
           0.5,0.5,0.5, // 8
           0.5,-0.5,0.5, // 5
           0.5,-0.5,-0.5, // 2

           0.5,-0.5,-0.5, // 2
           0.5,0.5,-0.5, // 6
           0.5,0.5,0.5, // 8

            // Face 5 - top
           0.5,0.5,-0.5, // 6
           -0.5,0.5,0.5, // 7
           0.5,0.5,0.5, // 8

           -0.5,0.5,0.5, // 7
           0.5,0.5,-0.5, // 6
           -0.5,0.5,-0.5, // 3

            // Face 6 -  bottom
           -0.5,-0.5,-0.5, // 1
           0.5,-0.5,-0.5, // 2
           -0.5,-0.5,0.5,  // 4

           0.5,-0.5,-0.5, // 2
           0.5,-0.5,0.5, // 5
           -0.5,-0.5,0.5 // 4
        ]);

        // (r, g, b) as unsigned bytes (chars)
        let colors = new Uint8Array([

            // Front
            1, 0, 0, // 2
            0, 0, 0, // 1
            0, 1, 0, // 3

            1, 0, 0, // 2
            0, 1, 0, // 3
            0, 1, 1, // 6
            

            // Left
            0, 0, 0, // 1
            0, 0, 1,// 4
            1, 1, 0, // 7

            0, 0, 0, // 1
            1, 1, 0, // 7
            0, 1, 0, // 3
            

            // Back
            0, 0, 1, // 4
            1, 1, 1, // 8
            1, 1, 0, // 7

            0, 0, 1, // 4
            1, 0, 1, // 5
            1, 1, 1, // 8
            
            
            // Right
            1, 1, 1, // 8
            1, 0, 1, // 5
            1, 0, 0, // 2

            1, 0, 0, // 2
            0, 1, 1, // 6
            1, 1, 1, // 8
            
            
            // Top
            0, 1, 1, // 6
            1, 1, 0, // 7
            1, 1, 1, // 8

            1, 1, 0, // 7
            0, 1, 1, // 6
            0, 1, 0, // 3
            
            
            // Bottom
            0, 0, 0, // 1
            1, 0, 0, // 2
            0, 0, 1,  // 4

            1, 0, 0, // 2
            1, 0, 1, // 5
            0, 0, 1, // 4
            
        ]);

        let aPosition = new Attribute(gl, program, "aPosition",
            positions, 3, gl.FLOAT);

        let aColor = new Attribute(gl, program, "aColor",
            colors, 3, gl.UNSIGNED_BYTE);
       
        this.draw = () => {
            program.use();
            program.MV;
            program.P;

            aPosition.enable();
            aColor.enable();

            gl.cullFace(gl.BACK);
            gl.enable(gl.CULL_FACE);

            gl.drawArrays(gl.TRIANGLES, 0, aPosition.count);

            aPosition.disable();
            aColor.disable();
        }
    }
};
