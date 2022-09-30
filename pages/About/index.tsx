import { useState } from "react";
import RotatingHead from "../../components/background/rotatingHead/RotatingHead";
import NavBar from "../../components/navbar/NavBar";
import UnderConstruction from "../../components/tools/UnderConstruction";



const About = () => {
	const [material, setMaterial] = useState("default");
	return (  
		<div className="w-full h-full">
			<NavBar back="/"/>
			<RotatingHead
				material={material}
			/>
			<div className="absolute w-full h-full 
							flex flex-col items-center justify-center
							p-4
							font-mono text-stone-100 leading-8">
				<p>I&apos;m Célestin, <br/>
				a <a
					className="text-red-600 underline underline-offset-4"
					onMouseEnter={() => {setMaterial("lyon")}}
					onMouseLeave={() => {setMaterial("default")}}
					>Lyon</a>–born, <a
					className="text-stone-900 underline underline-offset-4"
					onMouseEnter={() => {setMaterial("berlin")}}
					onMouseLeave={() => {setMaterial("default")}}
					>Berlin</a>–based, Designer, Developer and Media Artist. <br/> 
				I like to work with code, 3D, video, and photography.<br/>
				Contact: hello (at) celest.in</p>
			</div>
		</div>
	);
}

export default About;