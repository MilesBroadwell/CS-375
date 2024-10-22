/////////////////////////////////////////////////////////////////////////////
//
//  ExperimentalCube.js
//
//  A cube defined ???
//
class ExperimentalCube {
    constructor(gl, vertexShader, fragmentShader) {
        
        vertexShader ||= `
            uniform mat4 P;  // Projection transformation
            uniform mat4 MV; // Model-view transformation

            in vec4 aColor;
            out vec4 vColor;

            void main() {

                vColor = aColor;

                const vec3 vertices[] = vec3[8](
                    vec3(-0.5, -0.5, -0.5),
                    vec3(-0.5, -0.5, 0.5),
                    vec3(-0.5, 0.5, -0.5),
                    vec3(-0.5, 0.5, 0.5),

                    vec3(0.5, -0.5, -0.5),
                    vec3(0.5, -0.5, 0.5),
                    vec3(0.5, 0.5, -0.5),
                    vec3(0.5, 0.5, 0.5)
                );

                const ivec3 indices[] = ivec3[12](
                    ivec3(2, 0, 3), // Left
                    ivec3(3, 0, 1),
                    ivec3(7, 4, 6), // Right
                    ivec3(5, 4, 7),
                    ivec3(3, 5, 7), // Back
                    ivec3(1, 5, 3),
                    ivec3(6, 0, 2), // Front
                    ivec3(4, 0, 6),
                    ivec3(1, 0, 5), // Bottom
                    ivec3(5, 0, 4),
                    ivec3(7, 2, 3), // Top
                    ivec3(6, 2, 7)
                );
                vec4 v = vec4(vertices[indices[gl_InstanceID][gl_VertexID]], 1.0);
                gl_Position = P * MV * v;
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

    this.draw = () => {
        program.use();

        aColor.enable();

        gl.drawArraysInstanced(gl.TRIANGLE_FAN, 0, 3, 12);

        aColor.disable();
    };
  }
};
