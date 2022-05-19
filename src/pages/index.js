import React from "react";
import theme from "theme";
import { Theme, Image, Link, Box, Section, Text, Icon, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FaCreativeCommonsSampling, FaMoneyCheckAlt, FaCalendarCheck } from "react-icons/fa";
import { MdVerifiedUser } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
				<Link href="#" color="#ffffff" font="23px --fontFamily-googleAudiowide" text-decoration-line="initial">
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
			/>
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
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					color="--grey"
					letter-spacing="0.1em"
					lg-text-align="left"
					font="--base"
					text-transform="uppercase"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					NFT MUSIC BONDS
				</Text>
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
					Raise money and achieve your goals.
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
					Leverage your future revenues.
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
				>
					<Link
						sm-margin="0px 22px 0px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						text-decoration-line="initial"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						lg-margin="0px 32px 0px 0px"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						border-color="rgba(255, 255, 255, 0.3)"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
						hover-color="--primary"
						color="--white"
						margin="0px 44px 0px 0px"
						border-width="1px"
						border-style="solid"
						lg-padding="15px 23px 15px 23px"
						md-width="50%"
						background="--color-primary"
						font="--lead"
						hover-background="--color-white"
					>
						Mint Bonds
					</Link>
					<Link
						padding="15px 30px 15px 30px"
						font="--lead"
						border-radius="10px"
						border-width="1px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="15px 13px 15px 13px"
						text-decoration-line="initial"
						color="--white"
						background="rgba(255, 5, 5, 0)"
						margin="0px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
						href="/index1"
					>
						Market
					</Link>
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
				<Components.QuarklycommunityKitLottie path="https://assets6.lottiefiles.com/packages/lf20_si8r64.json" width="400px" height="400px" />
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
					How it works
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--greyD3"
					md-text-align="center"
					text-align="center"
					max-width="480px"
				>
					We're offering artists and content creators all over the world the possibility to leverage their monthly revenues. Issue your bond today, get funded, and repay your investors each month.
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaCreativeCommonsSampling}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Create
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Create the contents you love and prove your skills to the world. Get the revenues you deserve and build your future.{" "}
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaMoneyCheckAlt}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Get funds
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Mint bonds on your future revenues. Define a maturity date, estimate earnings, and sell them on the open market.{" "}
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaCalendarCheck}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Repay
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Repay your investors by collateralizing the bond each month. Keep your high credit score by never missing payments!
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="160px 0 24px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				flex-direction="column"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="center"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Components.QuarklycommunityKitLottie path="https://assets6.lottiefiles.com/packages/lf20_q56zavhf.json" width="550px" bottom="20px" position="relative" />
			</Box>
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
				left="20px"
				position="relative"
			>
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%">
					<Icon
						category="md"
						icon={MdVerifiedUser}
						size="30px"
						color="--primary"
						position="relative"
						right={0}
						left={0}
					/>
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
						position="relative"
						left="20px"
					>
						Get the verified status
					</Text>
				</Box>
				<Text
					width="85%"
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--indigo"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Get rid of the paperwork.
				</Text>
				<Text
					font="--base"
					opacity=".7"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 25px 0px"
					color="--dark"
				>
					By getting the verified badge you can issue verified bonds that investors are more keen to buy. We'll take care of all the legal aspects and protect both you and your investors.
					<br />
					Funds on-chain, papers off-chain.{"   "}
				</Text>
				<Link
					href="/login"
					sm-padding="15px 20px 15px 20px"
					hover-background="rgba(5, 165, 255, 0)"
					border-width="1px"
					border-style="solid"
					font="--lead"
					sm-margin="0px 22px 0px 0px"
					border-color="rgba(255, 255, 255, 0.3)"
					md-width="100%"
					md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					text-decoration-line="initial"
					color="--white"
					margin="0px 44px 0px 0px"
					hover-color="--primary"
					hover-border-color="--color-primary"
					md-text-align="center"
					background="--color-primary"
					padding="15px 30px 15px 30px"
					border-radius="10px"
					sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
				>
					Submit
				</Link>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6123949e957019001e284458/images/Group%20177.png?v=2021-08-24T00:44:18.633Z) 0% 30% /cover no-repeat scroll padding-box" sm-padding="0px 0 0px 0" md-padding="50px 0 50px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-gap="16px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-gap="0px"
				md-grid-template-columns="repeat(2, 1fr)"
			/>
			<Box
				justify-content="center"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				align-items="center"
				display="flex"
				min-height="320px"
				empty-min-height="64px"
				empty-border-style="solid"
				padding="0px 0px 60px 0px"
			>
				<Text
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
				>
					11M+
				</Text>
				<Text
					text-align="center"
					opacity="0.7"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--dark"
					font="--lead"
					margin="0px 0px 0px 0px"
				>
					Spotify Creators
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				min-height="320px"
				padding="0px 0px 60px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Text
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
				>
					5M+
				</Text>
				<Text
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					font="--lead"
					margin="0px 0px 0px 0px"
					text-align="center"
					opacity="0.7"
					position="relative"
					color="--dark"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					AppleMusic Creators
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				sm-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				justify-content="center"
				min-height="320px"
				md-margin="30px 0px 0px 0px"
				align-items="center"
				padding="0px 0px 60px 0px"
			>
				<Text
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
				>
					37M+
				</Text>
				<Text
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					margin="0px 0px 0px 0px"
					text-align="center"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					color="--dark"
					font="--lead"
				>
					Youtube Channels
				</Text>
			</Box>
			<Box
				flex-direction="column"
				md-margin="30px 0px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				display="flex"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				padding="0px 0px 60px 0px"
				sm-margin="0px 0px 0px 0px"
				min-height="320px"
				empty-border-width="1px"
				align-items="center"
				justify-content="center"
			>
				<Text
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
				>
					7B+
				</Text>
				<Text
					lg-width="70%"
					width="70%"
					position="relative"
					z-index="1"
					color="--dark"
					text-align="center"
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					font="--lead"
					margin="0px 0px 0px 0px"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Total Revenues
				</Text>
			</Box>
		</Section>
		<Section padding="60px 0 100px 0" md-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				justify-content="center"
				align-items="flex-start"
				flex-direction="column"
				width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
			>
				<Text
					margin="0px 0px 38px 0px"
					font="--headline2"
					color="--indigo"
					md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					text-align="left"
				>
					Ready to onboard
				</Text>
				<Hr
					border-style="solid"
					margin="0px 0px 0px 0px"
					height="0px"
					lg-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
			</Box>
			<Box
				flex-direction="column"
				justify-content="flex-start"
				border-width="0px 1px 0px 0px"
				md-padding="32px 16px 16px 16px"
				width="25%"
				max-height="265px"
				display="flex"
				align-items="center"
				sm-justify-content="flex-start"
				lg-justify-content="flex-start"
				md-align-items="center"
				border-color="rgba(66, 82, 207, 0.1)"
				height="100%"
				md-width="50%"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				margin="0px 0px 0px 0px"
				padding="16px 32px 16px 16px"
			>
				<Image
					object-fit="cover"
					border-radius="50%"
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/6285425121e43d0020957556/images/TaleOfUs_New.webp?v=2022-05-18T21:16:16.376Z"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					Tale Of US
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					Afterlife Records founders with +800k monthly listeners just on Spotify.
				</Text>
			</Box>
			<Box
				padding="16px 32px 16px 32px"
				border-width="0px 1px 0px 1px"
				width="25%"
				md-align-items="center"
				align-items="center"
				flex-direction="column"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				md-border-width="0px 0px 0px 1px"
				md-justify-content="flex-start"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
				display="flex"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				height="100%"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				md-width="50%"
			>
				<Image
					object-position="0% 0%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/6285425121e43d0020957556/images/MindAgainst.jpeg?v=2022-05-18T21:36:39.824Z"
					object-fit="cover"
					border-radius="50%"
				/>
				<Text font="--lead" color="--indigo" sm-text-align="center" margin="0px 0px 8px 0px">
					Mind Against
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					International DJs and producers with more than 300k monthly plays on Spotify.
				</Text>
			</Box>
			<Hr
				display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-style="solid"
				margin="0px 16px 32px 16px"
				md-margin="16px 16px 16px 16px"
				md-display="block"
				border-width="2px 0 0 0"
				height="0px"
			/>
			<Box
				border-color="rgba(66, 82, 207, 0.1)"
				md-justify-content="flex-start"
				sm-margin="0px 0px 30px 0px"
				padding="16px 32px 16px 32px"
				border-style="solid"
				lg-padding="32px 16px 16px 16px"
				sm-padding="32px 16px 16px 16px"
				border-width="0px 1px 0px 1px"
				lg-min-height="298px"
				md-border-width="0px 1px 0px 0px"
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="flex-start"
				margin="0px 0px 0px 0px"
				height="100%"
				width="25%"
				md-width="50%"
				lg-justify-content="flex-start"
				md-align-items="center"
				sm-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
				max-height="265px"
			>
				<Image
					src="https://uploads.quarkly.io/6285425121e43d0020957556/images/homyatol-1200x1200.jpeg?v=2022-05-18T21:36:58.082Z"
					object-fit="cover"
					border-radius="50%"
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					Homyatol
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					Italian youtuber with +500k subscribers on his Youtube channel.
				</Text>
			</Box>
			<Box
				align-items="center"
				padding="16px 32px 16px 32px"
				border-width="0px 0px 0px 1px"
				lg-padding="32px 16px 16px 16px"
				lg-min-height="298px"
				height="100%"
				md-align-items="center"
				width="25%"
				max-height="265px"
				md-width="50%"
				margin="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				lg-justify-content="flex-start"
				sm-padding="32px 16px 16px 16px"
				display="flex"
				sm-justify-content="flex-start"
				flex-direction="column"
				sm-margin="0px 0px 30px 0px"
				border-style="solid"
				md-justify-content="flex-start"
				md-padding="32px 16px 16px 16px"
			>
				<Image
					width="80px"
					height="80px"
					margin="0px 0px 8px 0px"
					src="https://uploads.quarkly.io/6285425121e43d0020957556/images/mathame-bio-bolgia-300x300.jpeg?v=2022-05-18T21:37:11.767Z"
					object-fit="cover"
					border-radius="50%"
				/>
				<Text margin="0px 0px 8px 0px" font="--lead" color="--indigo" sm-text-align="center">
					Mathame
				</Text>
				<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1" lg-font="400 14px/1.6 &quot;Inter&quot;, sans-serif">
					Electronic music producers with more than 450k monthly listeners on Spotify.{" "}
				</Text>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			position="relative"
			lg-padding="60px 0 60px 0"
			sm-padding="30px 0 30px 0"
			md-padding="30px 0 30px 0"
		>
			<Override
				slot="SectionContent"
				lg-padding="0px 0px 0px 0px"
				max-width="1194px"
				flex-wrap="wrap"
				flex-direction="row"
			/>
			<Box
				lg-align-items="flex-start"
				flex-direction="row"
				justify-content="flex-start"
				margin="0px 0px 64px 0px"
				padding="16px 0px 16px 0px"
				lg-margin="0px 0px 24px 0px"
				sm-flex-wrap="wrap"
				display="flex"
				align-items="center"
				sm-margin="0px 0px 30px 0px"
				width="100%"
			>
				<Box width="40%" sm-width="100%">
					<Text color="--indigo" sm-margin="0px 0px 16px 0px" margin="0px 0px 0px 0px" font="--headline4">
						Leverage revenues from:
					</Text>
				</Box>
			</Box>
			<Hr
				border-style="solid"
				height="0px"
				margin="0px 0px 32px 0px"
				lg-margin="0px 0px 16px 0px"
				lg-display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px 0 0 0"
			/>
			<Box
				margin="0px 0px 0px 0px"
				sm-flex-wrap="wrap"
				sm-margin="0px 0px 0px 0px"
				justify-content="center"
				flex-wrap="wrap"
				width="100%"
				display="flex"
			>
				<Box
					border-style="solid"
					sm-padding="0px 0px 0px 0px"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					sm-display="flex"
					sm-align-items="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-width="0px 1px 0px 0px"
					sm-justify-content="center"
				>
					<Box
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						justify-content="center"
						margin="0px 0px 0px 0px"
						sm-width="90%"
						width="100%"
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Image src="https://uploads.quarkly.io/6285425121e43d0020957556/images/Spotify_logo_with_text.svg.png?v=2022-05-18T21:38:37.727Z" sm-min-height="35px" />
					</Box>
				</Box>
				<Box
					border-width="0px 1px 0px 1px"
					md-border-width="0px 0px 0px 1px"
					sm-display="flex"
					sm-align-items="center"
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-style="solid"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
				>
					<Box
						sm-width="90%"
						width="100%"
						padding="18px 25px 18px 25px"
						align-items="center"
						margin="0px 0px 0px 0px"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						display="flex"
						justify-content="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Image src="https://uploads.quarkly.io/6285425121e43d0020957556/images/applemusiclogo.png?v=2022-05-18T21:40:42.045Z" sm-min-height="35px" />
					</Box>
				</Box>
				<Hr
					md-display="block"
					display="none"
					border-style="solid"
					height="0px"
					lg-margin="16px 0px 16px 0px"
					margin="32px 0px 32px 0px"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
				<Box
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					md-border-width="0px 1px 0px 0px"
					sm-display="flex"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					sm-align-items="center"
					width="33.333%"
					border-color="rgba(66, 82, 207, 0.1)"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						margin="0px 0px 0px 0px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
						sm-width="90%"
						padding="18px 25px 18px 25px"
						display="flex"
						justify-content="center"
						height="100px"
					>
						<Image src="https://uploads.quarkly.io/6285425121e43d0020957556/images/YouTube_Logo_2017.svg.webp?v=2022-05-18T21:41:22.963Z" sm-min-height="35px" />
					</Box>
				</Box>
				<Hr
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
					border-style="solid"
					height="0px"
				/>
				<Box
					padding="32px 74px 32px 74px"
					border-style="solid"
					md-border-width="0px 0px 0px 1px"
					sm-display="flex"
					sm-justify-content="center"
					width="33.333%"
					border-width="0px 1px 0px 0px"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-align-items="center"
				>
					<Box
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						justify-content="center"
						margin="0px 0px 0px 0px"
						sm-width="90%"
					>
						<Image src="https://uploads.quarkly.io/6285425121e43d0020957556/images/2560px-Soundcloud_logo.svg.png?v=2022-05-18T21:42:01.065Z" sm-min-height="35px" height="60px" />
					</Box>
				</Box>
				<Hr
					height="0px"
					border-width="2px 0 0 0"
					border-style="solid"
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="block"
					display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
				/>
				<Box
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-style="solid"
					border-color="rgba(66, 82, 207, 0.1)"
					sm-display="flex"
					sm-align-items="center"
					md-border-width="0px 1px 0px 0px"
					width="33.333%"
					border-width="0px 1px 0px 1px"
					lg-padding="16px 16px 16px 16px"
				>
					<Box
						width="100%"
						padding="18px 25px 18px 25px"
						display="flex"
						justify-content="center"
						margin="0px 0px 0px 0px"
						lg-padding="18px 18px 18px 18px"
						sm-width="90%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						align-items="center"
					>
						<Image sm-height="35px" src="https://uploads.quarkly.io/6285425121e43d0020957556/images/lzy7yowouuf81.webp?v=2022-05-18T21:44:15.106Z" height="60px" />
					</Box>
				</Box>
				<Box
					sm-display="flex"
					sm-align-items="center"
					width="33.333%"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					md-width="50%"
				>
					<Box
						justify-content="center"
						margin="0px 0px 0px 0px"
						lg-padding="18px 18px 18px 18px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						sm-width="90%"
					>
						<Image src="https://uploads.quarkly.io/6285425121e43d0020957556/images/twitch.png?v=2022-05-18T21:45:27.899Z" sm-height="35px" />
					</Box>
				</Box>
			</Box>
			<Hr
				border-style="solid"
				height="0px"
				margin="32px 0px 0px 0px"
				lg-margin="16px 0px 0px 0px"
				lg-display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px 0 0 0"
			/>
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