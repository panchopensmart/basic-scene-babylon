import {
    Scene,
    Engine,
    HemisphericLight, 
    FreeCamera, 
    Vector3, 
    MeshBuilder
} from '@babylonjs/core'

export class BasicScene {
    //initial scene and engine for create 
    scene: Scene
    engine: Engine

    constructor( private canvas: HTMLCanvasElement) {
        //create engine and starting Renderloop(() => {})
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();

        this.engine.runRenderLoop(() => {
            this.scene.render();
        })
    }

    CreateScene(): Scene {
        //create scene on created engine and camera()
        const scene = new Scene(this.engine);
        const camera = new FreeCamera("camera", new Vector3(0,1,-5), this.scene);
        //Attach for the input to show scene
        camera.attachControl();

        //create light
        const hemilight = new HemisphericLight(
            "hemiLight",
             new Vector3(0,1,0),
            this.scene
            );

        //size light
        hemilight.intensity = 0.5
        
        //create ground in scene
        const ground = MeshBuilder.CreateGround(
            "ground",
            {width:10, height:10}, 
            this.scene
        );
        
        //create ball
        const ball = MeshBuilder.CreateSphere('ball', {diameter: 1}, this.scene)
        ball.position = new Vector3(0,1,0)
        
        return scene;
    }
}