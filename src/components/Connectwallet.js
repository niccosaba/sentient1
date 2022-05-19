import React from "react";
import { useOverrides } from "@quarkly/components";
import { Button } from "@quarkly/widgets";
const defaultProps = {
	"width": "200px",
	"font": "normal 400 15px/1.5 \"Inter\", sans-serif",
	"border-radius": "15PX"
};
const overrides = {};

const Connectwallet = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Button {...rest}>
		CONNECT WALLET
		{children}
	</Button>;
};

Object.assign(Connectwallet, { ...Button,
	defaultProps,
	overrides
});
export default Connectwallet;