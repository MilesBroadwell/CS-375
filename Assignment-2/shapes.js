let gl = undefined;

let sunray, sunray2; // The Sun's Rays
let sun; // The Sun
let cloud, cloud2, cloud3, cloud4, cloud5, cloud6; // Clouds
let dirt, grass // Enviornment
let stem, shroomCapL, shroomCapD, shroomCapFlesh; // Mushroom Parts
let whiteSpot, whiteSpot2, whiteSpot3, whiteSpot4, whiteSpot5, whiteSpot6; // White spots on the mushroom

let ms;
let angle;

function init() {
    console.log("hi");
    let canvas = document.getElementById("webgl-canvas");
    gl = canvas.getContext("webgl2");
    if (!gl) { alert("Your Web browser doesn't support WebGL 2\nPlease contact Dave"); }

    // Add initialization code here
    gl.clearColor(0.0, 0.749, 1.0, 0.9);
    gl.enable(gl.DEPTH_TEST);

    ms = new MatrixStack();
    angle = 0.0;

    // Tetrahedrons
    sunray = new Tetrahedron(gl);
    sunray2 = new Tetrahedron(gl);
    
    // Spheres
    sun = new Sphere(gl, 36, 18);
    cloud = new Sphere(gl, 36, 18);
    cloud2 = new Sphere(gl, 36, 18);
    cloud3 = new Sphere(gl, 36, 18);
    cloud4 = new Sphere(gl, 36, 18);
    cloud5 = new Sphere(gl, 36, 18);
    cloud6 = new Sphere(gl, 36, 18);

    // Cylinders
    dirt = new Cylinder(gl, 36);
    grass = new Cylinder(gl, 36);
    stem = new Cylinder(gl, 36);
    shroomCapL = new Cylinder(gl, 36);
    shroomCapD = new Cylinder(gl, 36);
    shroomCapFlesh = new Cylinder(gl, 36);

    // White Spots for Mushroom (Cylinders)
    whiteSpot = new Cylinder(gl, 36);
    whiteSpot2 = new Cylinder(gl, 36);
    whiteSpot3 = new Cylinder(gl, 36);
    whiteSpot4 = new Cylinder(gl, 36);
    whiteSpot5 = new Cylinder(gl, 36);
    whiteSpot6 = new Cylinder(gl, 36);

    render();
}

/////////////////////////////////////////////////////////////////////////////
// RENDERS A NICE SUNNY DAY WITH A MUSHROOM AND FUNKY CLOUDS
/////////////////////////////////////////////////////////////////////////////

function render() {
    // Add rendering code here
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    angle += 3.0;
    angle %= 360.0;

    // -------------- THE SUN ------------------
    // 2 TETRA's AND A SPHERE
    // YELLOW SUNRAY - SUN'S RAYS 1
    ms.push();
    ms.translate(.2, .85);
    ms.rotate(angle, [0.0, 1.0, 0.0]);
    ms.scale(.15);
    sunray.MV = ms.current();
    sunray.color = vec4(1.0, 0.8, 0.0, 1.0);
    sunray.draw();
    ms.pop();

    // LIGHTER YELLOW TETRA - SUN'S RAYS 2
    ms.push();
    ms.translate(.2, .85);
    ms.rotate(240 - angle, [0.0, 1.0, 0.0]);
    ms.scale(.15);
    sunray2.MV = ms.current();
    sunray2.color = vec4(1.0, 0.6, 0.0, 0.75);
    sunray2.draw();
    ms.pop();

    // YELLOW SPHERE - THE SUN 
    ms.push();
    ms.translate(.2, .85);
    ms.rotate(180 - angle, [1.0, 0.0, 0.0]);
    ms.scale(.1);
    sun.MV = ms.current();
    sun.color = vec4(1.0, 0.9, 0.0, 1.0);
    sun.draw();
    ms.pop();

    // ----------- THE SUN (END) -----------------

    // -----------  THE GROUND   -----------------
    // dirt
    ms.push();
    ms.translate(0.0, -0.9);
    ms.scale(2,.15);
    dirt.MV = ms.current();
    dirt.color = vec4(0.4, 0.25, 0.1, 1.0);
    dirt.draw();
    ms.pop();

    // grass
    ms.push();
    ms.translate(0.0, -0.9);
    ms.scale(2,.2);
    grass.MV = ms.current();
    grass.color = vec4(0.2, 1.0, 0.5, 1.0);
    grass.draw();
    ms.pop();

    // --------- THE GROUND (END) ----------------


    // ---------    THE SHROOM    ----------------

    
    // Mushroom Stem
    ms.push();
    ms.translate(0.0, -0.75);
    ms.scale(.1, 1);
    stem.MV = ms.current();
    stem.color = vec4(0.9, 0.9, 0.875, 1.0);
    stem.draw();
    ms.pop();

    // Mushroom Cap - White Spot #1
    ms.push();
    ms.translate(0.1, 0.5);
    ms.scale(.02, .01);
    whiteSpot.MV = ms.current();
    whiteSpot.color = vec4(1.0, 1.0, 1.0, 1.0);
    whiteSpot.draw();
    ms.pop();

    // Mushroom Cap - White Spot #2
    ms.push();
    ms.translate(0.0, 0.5);
    ms.scale(.02, .01);
    whiteSpot2.MV = ms.current();
    whiteSpot2.color = vec4(1.0, 1.0, 1.0, 1.0);
    whiteSpot2.draw();
    ms.pop();

    // Mushroom Cap - White Spot #3
    ms.push();
    ms.translate(0.43, 0.41);
    ms.scale(.02, .01);
    whiteSpot3.MV = ms.current();
    whiteSpot3.color = vec4(1.0, 1.0, 1.0, 1.0);
    whiteSpot3.draw();
    ms.pop();

    // Mushroom Cap - White Spot #4
    ms.push();
    ms.translate(-0.2, 0.47);
    ms.scale(.03, .02);
    whiteSpot4.MV = ms.current();
    whiteSpot4.color = vec4(1.0, 1.0, 1.0, 1.0);
    whiteSpot4.draw();
    ms.pop();

    // Mushroom Cap - White Spot #5
    ms.push();
    ms.translate(-0.43, 0.4);
    ms.scale(.02, .01);
    whiteSpot5.MV = ms.current();
    whiteSpot5.color = vec4(1.0, 1.0, 1.0, 1.0);
    whiteSpot5.draw();
    ms.pop();

    // Mushroom Cap - White Spot #6
    ms.push();
    ms.translate(0.3, 0.47);
    ms.scale(.02, .01);
    whiteSpot6.MV = ms.current();
    whiteSpot6.color = vec4(1.0, 1.0, 1.0, 1.0);
    whiteSpot6.draw();
    ms.pop();


    // Mushroom Cap - Grey Flesh
    ms.push();
    ms.translate(0.0, 0.22);
    ms.scale(.4, .15);
    shroomCapFlesh.MV = ms.current();
    shroomCapFlesh.color = vec4(0.825, 0.8, 0.8, 1.0);
    shroomCapFlesh.draw();
    ms.pop();

    // Mushroom Cap - Darker
    ms.push();
    ms.translate(0.0, 0.27);
    ms.scale(.5, .2);
    shroomCapD.MV = ms.current();
    shroomCapD.color = vec4(0.85, 0.2, 0.2, 1.0);
    shroomCapD.draw();
    ms.pop();

    // Mushroom Cap - Lighter
    ms.push();
    ms.translate(0.0, 0.31);
    ms.scale(.5, .2);
    shroomCapL.MV = ms.current();
    shroomCapL.color = vec4(1.0, 0.3, 0.3, 0.85);
    shroomCapL.draw();
    ms.pop();


    // --------- THE SHROOM (END) ----------------

    // ---------    THE CLOUDS    ---------------- 

    ms.push();
    ms.translate(-0.748, 0.75);
    ms.rotate(angle, [0.1, 1.0, 0.1]);
    ms.scale(.25, .1);
    cloud.MV = ms.current();
    cloud.color = vec4(0.95, 0.95, 0.95, 1.0);
    cloud.draw();
    ms.pop();

    ms.push();
    ms.translate(-0.6, 0.8);
    ms.rotate(240 -angle, [0.1, 1.0, 0.1]);
    ms.scale(.25, .1);
    cloud2.MV = ms.current();
    cloud2.color = vec4(0.85, 0.85, 0.87, 1.0);
    cloud2.draw();
    ms.pop();

    ms.push();
    ms.translate(0.748, 0.75);
    ms.rotate(180 - angle, [0.05, 1.0, 0.5]);
    ms.scale(.25, .1);
    cloud3.MV = ms.current();
    cloud3.color = vec4(0.9, 0.9, 0.9, 1.0);
    cloud3.draw();
    ms.pop();

    ms.push();
    ms.translate(-0.6, 0.4);
    ms.rotate(90 - angle, [1.0, 0.0, 0.5]);
    ms.scale(.1, .05);
    cloud4.MV = ms.current();
    cloud4.color = vec4(0.7, 0.7, 0.7, 1.0);
    cloud4.draw();
    ms.pop();

    ms.push();
    ms.translate(0.7, 0.1);
    ms.rotate(210 - angle, [1.0, 1.0, 1.0]);
    ms.scale(.125, .075);
    cloud5.MV = ms.current();
    cloud5.color = vec4(1.0, 1.0, 1.0, 1.0);
    cloud5.draw();
    ms.pop();

    ms.push();
    ms.translate(0.85, 0.2);
    ms.rotate(330 - angle, [0.5, 0.5, 1.0]);
    ms.scale(.15, .1);
    cloud6.MV = ms.current();
    cloud6.color = vec4(0.8, 0.8, 0.8, 1.0);
    cloud6.draw();
    ms.pop();

    // --------- THE CLOUDS (END) ----------------


    requestAnimationFrame(render);
}

window.onload = init;
