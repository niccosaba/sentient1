import React from "react";
import { useOverrides } from "@quarkly/components";
import MintBond from "./MintBond";
const defaultProps = {};
const overrides = {};

const ListBond = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <MintBond {...rest}>
		List a new bond
		{children}
	</MintBond>;
};

Object.assign(ListBond, { ...MintBond,
	defaultProps,
	overrides
});
export default ListBond;