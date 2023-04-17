import React, { useEffect } from 'react'
import './SphereContent.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const SphereContent = ({ lista }) => {
  useEffect(() => {
    const loader = new THREE.FontLoader();
    const canvas = document.querySelector("canvas.webgl");
    const tecnologias = lista;

    const scene = new THREE.Scene();

    const sizes = {
      width: canvas.clientWidth,
      height: canvas.clientWidth,
    };

    const cursor = new THREE.Vector3()

    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      0.1,
      1000
    );
    camera.position.z = 150;

    scene.add(camera);

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);

    /**
     * Objects
     */

    const group = new THREE.Group();

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(50),
      new THREE.MeshBasicMaterial({
        wireframe: true,
        visible: false,
        color: "#E5DCC3",
      })
    );


    group.add(sphere);
    // const axesGroup = new THREE.AxesHelper(5)
    // group.add(axesGroup)



    const textos = [];

    const textMaterial = new THREE.MeshBasicMaterial({ color: "#E5DCC3" });

    let loadCheck = false;

    for (let i = 0; i < tecnologias.length; i++) {
      loader.load(
        "/fonts/helvetiker_regular.typeface.json",
        (font) => {
          const textGeometry = new THREE.TextGeometry(tecnologias[i], {
            font: font,
            size: Math.random() + 3,
            height: 0.1,
            curveSegments: 6,
          });
          textGeometry.center();
          loadCheck = true;
          const text = new THREE.Mesh(textGeometry, textMaterial);
          textos.push(text);
          group.add(textos[i]);
        }
      );
    }

    // const axesContenedor = new THREE.AxesHelper(10)
    var contenedor = new THREE.Object3D();
    contenedor.add(group)
    // contenedor.add(axesContenedor)
    scene.add(contenedor)

    let out = true;
    let mouseEnter = false;
    let move = false

    canvas.addEventListener("mousemove", (evt) => {
      const midXPosition = (canvas.getBoundingClientRect().right + canvas.getBoundingClientRect().left) / 2;
      const midYPosition = (canvas.getBoundingClientRect().bottom + canvas.getBoundingClientRect().top) / 2;
      cursor.x = 2 * (evt.clientX - midXPosition) / canvas.clientWidth;
      cursor.y = 2 * (midYPosition - evt.clientY) / canvas.clientHeight;
      // cursor.x = (evt.clientX / window.innerWidth) * 2 - 1;
      // cursor.y = - (evt.clientY / window.innerHeight) * 2 + 1;
      move = true;
    });

    canvas.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    canvas.addEventListener("mouseout", () => {
      out = true;
      move = false;
      mouseEnter = false;
    });

    canvas.addEventListener("mouseenter", () => {
      out = false;
      mouseEnter = true;
    });

    const textAnimation = (mesh, parent, i) => {
      mesh.position.set(
        parent.geometry.vertices[i].x,
        parent.geometry.vertices[i].y,
        parent.geometry.vertices[i].z
      );
    };

    var angle = 0
    var quaternionMesh = new THREE.Quaternion();
    var quaternion = group.quaternion.clone();

    const tick = () => {
      if (loadCheck) {
        for (let i = 0; i < textos.length; i++) {
          textos[i].lookAt(
            textos[i].position.x,
            textos[i].position.y,
            sphere.geometry.parameters.radius + 1000
          );
        }

        let vertex = 0;
        for (let i = 0; i < tecnologias.length; i++) {
          textAnimation(textos[i], sphere, vertex);
          vertex += 3;
          textos[i].rotation.setFromVector3(textos[0].rotation.toVector3());
        }
      }

      if (mouseEnter) {
        // Quaternion for rotation in axis ortagonal at cursor
        cursor.normalize()
        quaternionMesh.setFromAxisAngle({ x: -cursor.y, y: cursor.x, z: 0 }, angle);
        angle += 0.02;
        quaternion.slerp(quaternionMesh, 0.02);
        group.setRotationFromQuaternion(quaternion)
        quaternion = group.quaternion.clone();
      }
      if (out) {
        // Final rotation of group and rotation random
        quaternion = group.quaternion.clone();
        quaternionMesh.setFromAxisAngle({ x: -cursor.y, y: cursor.x, z: 0 }, angle);
        quaternion.slerp(quaternionMesh, 0.02);
        group.rotation.x += 0.02;
        group.rotation.y += 0.02;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(tick);

    };
    tick();

  }, [])

  return (
    <canvas className='webgl' ></canvas >
  )
}

export default SphereContent