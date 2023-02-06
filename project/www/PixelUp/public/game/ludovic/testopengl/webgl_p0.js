"use strict";

    // Création du contexte WebGL
    var canvas = document.querySelector("#canvas");
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
     
    // Création d'un programme
    var programme = creerProgrammeDepuisScripts(gl, ["shader-de-vertex-2d", "shader-de-fragment-2d"]);
    gl.useProgram(programme);
     
    // Création d'un pointeur pour les données de vertex
    var emplacementPosition = gl.getAttribLocation(programme, "a_position");
     
    // Crée un tampon et ajoute un rectangle avec des données en espace de projection déjà préparées
    // (un rectangle = 2 triangles)
    var tampon = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, tampon);
    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
            -1.0, -1.0,
             1.0, -1.0,
            -1.0,  1.0,
            -1.0,  1.0,
             1.0, -1.0,
             1.0,  1.0]),
        gl.STATIC_DRAW);
    gl.enableVertexAttribArray(emplacementPosition);
    gl.vertexAttribPointer(emplacementPosition, 2, gl.FLOAT, false, 0, 0);
     
    // appel de rendu
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    