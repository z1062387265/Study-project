export const THREE = require('three');
export const TWEEN = require('tween');
export const OrbitControls = require('./OrbitControls.js');
export const Detector = require('./Detector.js');
const world = {
  admin: function(){
    if (!Detector.webgl) {
      Detector.addGetWebGLMessage();
      document.getElementById('container').innerHTML = '';
    }
    var container, stats;
    var sphere, group;
    var camera, controls, scene, renderer;
    var textureLoader;
    const clock = new THREE.Clock();
    const mouse = new THREE.Vector2();
    var objects = [];

    init();
    animate();

    function init() {
      container = document.getElementById('container');
      container.innerHTML = "";

      camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 18;
      setupTween();
      // controls = new THREE.OrbitControls(camera);

      renderer = new THREE.WebGLRenderer({antialias: false,alpha:true});
//        renderer.setClearColor(0x000000);
//        renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
//        renderer.shadowMap.enabled = true;

      textureLoader = new THREE.TextureLoader();

      // 场景
      scene = new THREE.Scene();
      group = new THREE.Object3D();
      scene.add(group);
      // 环境光
      var ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);
      // 线性光
      var light = new THREE.DirectionalLight(0xf0f0f0, 0.8);
      light.position.set(-10, 10, 5);
      light.castShadow = true;
      var d = 10;
      light.shadow.camera.left = -d;
      light.shadow.camera.right = d;
      light.shadow.camera.top = d;
      light.shadow.camera.bottom = -d;
      light.shadow.camera.near = 2;
      light.shadow.camera.far = 2;
      light.shadow.mapSize.x = 1024;
      light.shadow.mapSize.y = 1024;
      group.add(light);
      container.appendChild(renderer.domElement);

      var World = new THREE.SphereGeometry(5, 32, 32);
      var WorldMaterial = new THREE.MeshPhongMaterial();
      sphere = new THREE.Mesh(World, WorldMaterial);
      group.add(sphere);

      WorldMaterial.map = THREE.ImageUtils.loadTexture('../../static/img/world/world.jpg');
//凹凸贴图
      WorldMaterial.bumpMap = THREE.ImageUtils.loadTexture('../../static/img/world/earth_bump.jpg');
      var specularTexture = THREE.ImageUtils.loadTexture('../../static/img/world/earth_spec.jpg');
      WorldMaterial.specularMap = specularTexture;
      WorldMaterial.specular = new THREE.Color(0x272727);
      WorldMaterial.bumpScale = 0.08;

      var Cloud = new THREE.SphereGeometry(5.2, 32, 32);
      var CloudMaterial = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('../../static/img/world/earth_cloud.png'),
        transparent: true,
        opacity: 0.7
      });
      var sphere1 = new THREE.Mesh(Cloud, CloudMaterial);
      group.add(sphere1);
      // group.rotation.y = 2.8;
      // group.rotation.x = 0.5;

      var spriteMap = new THREE.TextureLoader().load('../../static/img/world/longhua.png');
      var spriteMap1 = new THREE.TextureLoader().load('../../static/img/world/guanlan.png');

      var spriteMaterial1 = new THREE.SpriteMaterial({map: spriteMap, color: 0xffffff, fog: true});
      var spriteMaterial2 = new THREE.SpriteMaterial({map: spriteMap1, color: 0xffffff, fog: true});

      var LongHua = new THREE.Sprite(spriteMaterial1);
      LongHua.position.set(-2.3, 2.28, -4.52);
      LongHua.scale.set(0.6,0.29,0.6);
      group.add(LongHua);
      objects.push(LongHua);

      var GuanLan = new THREE.Sprite(spriteMaterial2);
      GuanLan.position.set(-2.3, 2.80, -4.22);
      GuanLan.scale.set(0.6,0.29,0.6);
      group.add(GuanLan);
      objects.push(GuanLan);
      window.addEventListener('resize', onWindowResize, false);
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    function addressPosition(name,x,y,z,sprite_name){
      name = new THREE.Sprite(sprite_name);
      name.position.set(x, y, z);
      name.scale.set(0.6,0.29,0.6);
      group.add(name);
      objects.push(name);
    }

    function setupTween(){
      var position = { x : 0, y: 0,x1:0.5,y1:2.7};
      var position1 = { x:0.5,y: 2.7};
      var target = { x : 0.5, y: 2.7 };
      var target1 = { x : 0.4, y: 2.6};
      var position2 = {z:18};
      var target3 = {z:0};
      var tween = new TWEEN.Tween(position).to(target,2000)
        .delay(4000).onUpdate(function(){
          group.rotation.x = position.x;
          group.rotation.y = position.y;
        });
      var tween2 = new TWEEN.Tween(position1).to(target1,2000)
        .delay(8000).onUpdate(function(){
          group.rotation.x = position1.x;
          group.rotation.y = position1.y;
        });
      var tween3 = new TWEEN.Tween(position2).to(target3,8000)
        .delay(16000).onUpdate(function(){
          camera.position.z = position2.z;
        });
      tween.start();
      tween2.start();
      tween3.start();
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
      TWEEN.update()
//        stats.update();
//       controls.update();
    }
    function render() {
      group.rotation.y += 0.0002;
      renderer.render(scene, camera);
    }
  }
};

export default world
