import React from "react";
import theme from "theme";
import { Theme, Image, Link, Box, Section, Text, Icon, List, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { DiCssdeck } from "react-icons/di";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
		<Helmet>
			<title>
				Music Bonds - Leverage Your Future Revenues
			</title>
			<meta name={"description"} content={"Raise capital leveraging your future revenues,  achieve your goals and repay monthly your investors. "} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Image
			md-top="300px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			position="absolute"
			right="0px"
			bottom="auto"
			top="130px"
			z-index="1"
			lg-right="-200px"
			md-width="600px"
		/>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Link href="/index" color="#ffffff" font="23px --fontFamily-googleAudiowide" text-decoration-line="initial">
					SENTIENT PROTOCOL{" "}
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override
						slot="Content"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
					/>
					<Override slot="Children" justify-content="center" display="flex" align-items="center" />
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Box
						display="flex"
						align-items="center"
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
					>
						<Components.Connectwallet />
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 80px 0" quarkly-title="HeroBlock" md-padding="36px 0 60px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
			/>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="flex-start"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					letter-spacing="1%"
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Find your best deal.
				</Text>
				<Text
					font="--base"
					letter-spacing="0.05em"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="0.7"
				>
					Buy and sell your NFT bonds.
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
				>
					<Components.ListBond />
				</Box>
			</Box>
			<Box
				empty-border-style="solid"
				width="30%"
				display="flex"
				justify-content="flex-end"
				empty-border-width="1px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				align-items="center"
				md-width="100%"
				md-order="-1"
				empty-min-width="64px"
			>
				<Components.QuarklycommunityKitLottie path="https://assets7.lottiefiles.com/packages/lf20_zinxs4wn.json" width="400px" height="400px" />
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#EDF2F6" sm-padding="60px 0 60px 0">
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Listed Bonds
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--greyD3"
					md-text-align="center"
					text-align="center"
					max-width="480px"
				>
					All bonds have a score. A Bond that is not{" "}
					<br />
					over-collateralized is more risky and speculative.{" "}
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000 linear-gradient(180deg,#003389 0%,transparent 100%) 0 0 no-repeat"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					width="380px"
					height="550px"
					position="static"
					left={0}
				>
					<Box min-width="100px" min-height="100px" position="relative" top="-30px">
						<Components.QuarklycommunityKitLottie width="200px" height="200px" path="https://assets7.lottiefiles.com/packages/lf20_zinxs4wn.json" />
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="20px">
						<Text margin="0px 0px 0px 0px" font="--headline4" color="#ffffff">
							Tale Of US
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#b9b9b9">
							30 bonds
						</Text>
						<Text margin="0px 0px 0px 0px" font="--textBase" color="#b9b9b9">
							Floor price: 30 UST
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="40px">
						<Icon
							category="di"
							icon={DiCssdeck}
							size="64px"
							width="20px"
							height="20px"
							color="#26ff00"
						/>
						<List
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 20px"
							list-style-type="disc"
							as="ul"
							font="--base"
							border-color="#ffffff"
							color="#ffffff"
						>
							<Text margin="0px 0px 0px 0px">
								Overcollaterlized
							</Text>
							<Text margin="0px 0px 0px 0px">
								Maturity date: 07.21.2023
							</Text>
						</List>
					</Box>
					<Button position="relative" top="25px" border-radius="15PX">
						BUY
					</Button>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000 linear-gradient(180deg,#003389 0%,transparent 100%) 0 0 no-repeat"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					width="380px"
					height="550px"
					position="static"
					left={0}
				>
					<Box min-width="100px" min-height="100px" position="relative" top="-30px">
						<Components.QuarklycommunityKitLottie width="200px" height="200px" path="https://assets7.lottiefiles.com/packages/lf20_zinxs4wn.json" />
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="20px">
						<Text margin="0px 0px 0px 0px" font="--headline4" color="#ffffff">
							Mind Against
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#b9b9b9">
							35 bonds
						</Text>
						<Text margin="0px 0px 0px 0px" font="--textBase" color="#b9b9b9">
							Floor price: 15 UST
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="40px">
						<Icon
							category="di"
							icon={DiCssdeck}
							size="64px"
							width="20px"
							height="20px"
							color="#ff9700"
						/>
						<List
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 20px"
							list-style-type="disc"
							as="ul"
							font="--base"
							border-color="#ffffff"
							color="#ffffff"
						>
							<Text margin="0px 0px 0px 0px">
								Overcollaterlized
							</Text>
							<Text margin="0px 0px 0px 0px">
								Maturity date: 02.11.2023
							</Text>
						</List>
					</Box>
					<Button position="relative" top="25px" border-radius="15PX">
						BUY
					</Button>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000 linear-gradient(180deg,#003389 0%,transparent 100%) 0 0 no-repeat"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					width="380px"
					height="550px"
					position="static"
					left={0}
				>
					<Box min-width="100px" min-height="100px" position="relative" top="-30px">
						<Components.QuarklycommunityKitLottie width="200px" height="200px" path="https://assets7.lottiefiles.com/packages/lf20_zinxs4wn.json" />
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="20px">
						<Text margin="0px 0px 0px 0px" font="--headline4" color="#ffffff">
							Justin Brill
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#b9b9b9">
							70 bonds
						</Text>
						<Text margin="0px 0px 0px 0px" font="--textBase" color="#b9b9b9">
							Floor price: 11 UST
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="40px">
						<Icon
							category="di"
							icon={DiCssdeck}
							size="64px"
							width="20px"
							height="20px"
							color="#ff0000"
						/>
						<List
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 20px"
							list-style-type="disc"
							as="ul"
							font="--base"
							border-color="#ffffff"
							color="#ffffff"
						>
							<Text margin="0px 0px 0px 0px">
								Speculative
							</Text>
							<Text margin="0px 0px 0px 0px">
								Maturity date: 12.12.2022
							</Text>
						</List>
					</Box>
					<Button position="relative" top="25px" border-radius="15PX">
						BUY
					</Button>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000 linear-gradient(180deg,#003389 0%,transparent 100%) 0 0 no-repeat"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					width="380px"
					height="550px"
					position="static"
					left={0}
				>
					<Box min-width="100px" min-height="100px" position="relative" top="-30px">
						<Components.QuarklycommunityKitLottie width="200px" height="200px" path="https://assets7.lottiefiles.com/packages/lf20_zinxs4wn.json" />
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="20px">
						<Text margin="0px 0px 0px 0px" font="--headline4" color="#ffffff">
							Mr. Beast
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#b9b9b9">
							2 bonds
						</Text>
						<Text margin="0px 0px 0px 0px" font="--textBase" color="#b9b9b9">
							Floor price: 1000 UST
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="40px">
						<Icon
							category="di"
							icon={DiCssdeck}
							size="64px"
							width="20px"
							height="20px"
							color="#ff9700"
						/>
						<List
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 20px"
							list-style-type="disc"
							as="ul"
							font="--base"
							border-color="#ffffff"
							color="#ffffff"
						>
							<Text margin="0px 0px 0px 0px">
								Collaterlized
							</Text>
							<Text margin="0px 0px 0px 0px">
								Maturity date: 04.09.2022
							</Text>
						</List>
					</Box>
					<Button position="relative" top="25px" border-radius="15PX">
						BUY
					</Button>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000 linear-gradient(180deg,#003389 0%,transparent 100%) 0 0 no-repeat"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					width="380px"
					height="550px"
					position="static"
					left={0}
				>
					<Box min-width="100px" min-height="100px" position="relative" top="-30px">
						<Components.QuarklycommunityKitLottie width="200px" height="200px" path="https://assets7.lottiefiles.com/packages/lf20_zinxs4wn.json" />
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="20px">
						<Text margin="0px 0px 0px 0px" font="--headline4" color="#ffffff">
							Homyatol
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#b9b9b9">
							130 bonds
						</Text>
						<Text margin="0px 0px 0px 0px" font="--textBase" color="#b9b9b9">
							Floor price: 5 UST
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="40px">
						<Icon
							category="di"
							icon={DiCssdeck}
							size="64px"
							width="20px"
							height="20px"
							color="#1cff00"
						/>
						<List
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 20px"
							list-style-type="disc"
							as="ul"
							font="--base"
							border-color="#ffffff"
							color="#ffffff"
						>
							<Text margin="0px 0px 0px 0px">
								Overcollaterlized
							</Text>
							<Text margin="0px 0px 0px 0px">
								Maturity date: 08.21.2023
							</Text>
						</List>
					</Box>
					<Button position="relative" top="25px" border-radius="15PX">
						BUY
					</Button>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000 linear-gradient(180deg,#003389 0%,transparent 100%) 0 0 no-repeat"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
					width="380px"
					height="550px"
					position="static"
					left={0}
				>
					<Box min-width="100px" min-height="100px" position="relative" top="-30px">
						<Components.QuarklycommunityKitLottie width="200px" height="200px" path="https://assets7.lottiefiles.com/packages/lf20_zinxs4wn.json" />
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="20px">
						<Text margin="0px 0px 0px 0px" font="--headline4" color="#ffffff">
							Homyatol
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#b9b9b9">
							130 bonds
						</Text>
						<Text margin="0px 0px 0px 0px" font="--textBase" color="#b9b9b9">
							Floor price: 5 UST
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" position="relative" top="40px">
						<Icon
							category="di"
							icon={DiCssdeck}
							size="64px"
							width="20px"
							height="20px"
							color="#1cff00"
						/>
						<List
							margin="0px 0px 0px 0px"
							padding="0px 0px 0px 20px"
							list-style-type="disc"
							as="ul"
							font="--base"
							border-color="#ffffff"
							color="#ffffff"
						>
							<Text margin="0px 0px 0px 0px">
								Overcollaterlized
							</Text>
							<Text margin="0px 0px 0px 0px">
								Maturity date: 08.21.2023
							</Text>
						</List>
					</Box>
					<Button position="relative" top="25px" border-radius="15PX">
						BUY
					</Button>
				</Box>
			</Box>
		</Section>
		<Box
			empty-border-style="solid"
			empty-border-color="LightGray"
			background=",--color-indigo url(https://uploads.quarkly.io/6123949e957019001e284458/images/backfooter.svg?v=2021-08-24T19:40:13.860Z) 0% 0% /cover repeat scroll padding-box"
			min-height="220px"
			md-min-height="140px"
			empty-min-width="64px"
			empty-min-height="64px"
			empty-border-width="1px"
		/>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});