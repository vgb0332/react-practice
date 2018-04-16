import * as THREE from 'three';
import React from 'react';
import React3 from 'react-three-renderer';
import ParsedModel from '../util/parsed_model';


var loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"model.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		// scene.add( obj );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);

class Canvas extends React.Component {
  constructor(props, context) {
    super(props, context);

    // construct the position vector here, because if we use 'new' within render,
    // React will think that things have changed when they have not.
    this.cameraPosition = new THREE.Vector3(0, 0, 5);

    this.state = {
      cubeRotation: new THREE.Euler(),
      width: window.innerWidth,
      height: window.innerHeight
    };


    this._onAnimate = () => {
      // we will get this callback every frame

      // pretend cubeRotation is immutable.
      // this helps with updates and pure rendering.
      // React will be sure that the rotation has now updated.
      // console.log(this.state.width, window.innerWidth);
      // if(this.state.width !== window.innerWidth || this.state.height !== window.innerHeight){
      //   this.setState({
      //     cubeRotation: new THREE.Euler(
      //       this.state.cubeRotation.x + 0.1,
      //       this.state.cubeRotation.y + 0.1,
      //       0
      //     ),
      //     width: window.innerWidth,
      //     height: window.innerHeight
      //   });
      // }
    };

    this._onWindowResize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }

  componentDidMount() {
    this._onWindowResize();
    window.addEventListener("resize", this._onWindowResize);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this._onWindowResize);
  }

  render() {
    const width = window.innerWidth; // canvas width
    const height = window.innerHeight; // canvas height

    return (
      <React3
      mainCamera="camera" // this points to the perspectiveCamera which has the name set to "camera" below
      width={width}
      height={height}

      onAnimate={this._onAnimate}
    >
      <scene>
        <perspectiveCamera
          name="camera"
          fov={75}
          aspect={width / height}
          near={0.1}
          far={1000}

          position={this.cameraPosition}
        />
        <mesh
          rotation={this.state.cubeRotation}
        >
          <boxGeometry
            width={1}
            height={1}
            depth={1}
          />
          <meshBasicMaterial
            color={0x00ff00}
          />
        </mesh>
      </scene>
    </React3>
    );
  }
}

export default Canvas;
