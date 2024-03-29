"use client";

import { MatterScene } from "@/components/MatterScene";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
	const [addBall, setAddBall] = useState<number>(0);

	const handleAddBall = () => {
		setAddBall(addBall + 1);
	};

	return (
		<>
			<div className="md:fixed md:end-0 p-2 z-[99999999999] relative flex mx-auto w-fit items-center">
				<Button variant={"link"}>
					<a href="https://npitt.dev" target="_blank" rel="noopener noreferrer">
						made with ❤️ by Noah Pittman
					</a>
				</Button>
				<div className="">
					<ModeToggle />
				</div>
			</div>

			<div className="flex-col flex relative pt-2 w-full justify-center z-10">
				<Button className="w-fit mx-auto" onClick={handleAddBall}>
					Ball Me
				</Button>
			</div>
			<div className="fixed inset-0 p-2  mx-auto">
				<MatterScene particleTrigger={addBall} />
			</div>
		</>
	);
}
