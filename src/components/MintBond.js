import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"sm-margin": "0px 22px 0px 0px",
	"transition": "background-color 0.3s --transitionTimingFunction-easeInOut 0s",
	"text-decoration-line": "initial",
	"sm-font": "normal 500 18px/1.6 \"Inter\", sans-serif",
	"md-font": "normal 500 16px/1.6 \"Inter\", sans-serif",
	"sm-padding": "15px 13px 15px 13px",
	"md-text-align": "center",
	"lg-margin": "0px 32px 0px 0px",
	"padding": "15px 30px 15px 30px",
	"border-radius": "10px",
	"border-color": "rgba(255, 255, 255, 0.3)",
	"lg-font": "normal 500 18px/1.6 \"Inter\", sans-serif",
	"md-padding": "15px 16px 15px 16px",
	"hover-color": "--primary",
	"color": "--white",
	"margin": "0px 44px 0px 0px",
	"border-width": "1px",
	"border-style": "solid",
	"lg-padding": "15px 23px 15px 23px",
	"md-width": "50%",
	"background": "--color-primary",
	"font": "--lead",
	"hover-background": "--color-white",
	"children": "Mint Bonds"
};
const overrides = {};

const MintBond = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(MintBond, { ...Link,
	defaultProps,
	overrides
});
export default MintBond;