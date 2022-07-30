import { useState } from "react";
import Head from "./PageHeader";
import YoutubeVideo from "./YoutubeVideo"

const OverviewHomeBuyingProcess: React.FC<{}> = _ => {
  const [click, setClick] = useState<boolean>(false);
	return (
		<div className="App">
		    {Head("Homebuy Process Overview", click, setClick )}
			<YoutubeVideo embedId="xBtKMup3jVE" />
		</div>
	)
}

export default OverviewHomeBuyingProcess;

