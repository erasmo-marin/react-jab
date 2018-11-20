import React from "react";
import { inject } from "mobx-react"; 

class Component extends React.Component {
	render() {

		const { registry = false, id = false, props, coreStore } = this.props;

		if(!registry || !registry.get) {
			return <div style={{ color: "red" }}>
						{`There was a problem trying to load component with key ${id}`}
				   </div>;
		}

		const C = registry.get(id);

		return <C {...props} executeTransition={coreStore.executeTransition}/>
	}
}

Component = inject("coreStore")(Component);

export default Component;