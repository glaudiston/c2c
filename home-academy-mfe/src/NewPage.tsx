import { useState } from "react";
import Head from "./PageHeader";
import YoutubeVideo from "./YoutubeVideo"

function NewPage() {
  const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
		    {Head("new page here ", click, setClick )}
			<YoutubeVideo embedId="v0--CQ_sGEw" />
		</div>
	)
}

export default NewPage;

