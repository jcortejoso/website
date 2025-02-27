import frontMatter from "front-matter"
import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import designForAll from "src/experience/eventkit/content/tenents/design-for-all.md"
import embodyHumility from "src/experience/eventkit/content/tenents/embodying-humility.md"
import innovatingOnMoney from "src/experience/eventkit/content/tenents/innovating-on-money.md"
import strivingForBeauty from "src/experience/eventkit/content/tenents/striving-for-beauty.md"
import Image from "next/image"
import designForAllImg from "src/experience/eventkit/content/tenents/design-for-all.png"
import embodyHumilityImg from "src/experience/eventkit/content/tenents/embodying-humility.png"
import innovatingOnMoneyImg from "src/experience/eventkit/content/tenents/innovating-on-money.png"
import strivingForBeautyImg from "src/experience/eventkit/content/tenents/striving-for-beauty.png"

import Markdown, { Attributes } from "src/experience/Markdown"
import { H3 } from "src/fonts/Fonts"
import AspectRatio from "src/shared/AspectRatio"
import { fonts, standardStyles } from "src/styles"

const DESIGN_FOR_ALL = frontMatter<Attributes>(designForAll)
const HUMILITY = frontMatter<Attributes>(embodyHumility)
const INNOVATING = frontMatter<Attributes>(innovatingOnMoney)
const BEAUTY = frontMatter<Attributes>(strivingForBeauty)

interface Props {
  body: string
  image?: StaticImageData
}

function Tenent({ body, title, description, image }: Props & Attributes) {
  return (
    <View style={styles.root}>
      <View style={styles.info}>
        <H3 style={standardStyles.elementalMarginBottom}>{title}</H3>
        <Text style={[fonts.p, standardStyles.elementalMarginBottom]}>{description}</Text>
        <AspectRatio ratio={280 / 170} style={styles.illo}>
          <Image src={image} />
        </AspectRatio>
      </View>
      <View style={styles.content}>
        <Markdown source={body} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 15,
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
  },
  info: {
    marginVertical: 15,
    flex: 1,
    flexBasis: 300,
    minWidth: 225,
    paddingRight: 20,
  },
  content: {
    flex: 1,
    minWidth: 315,
    flexBasis: 400,
  },
  illo: {
    maxWidth: 300,
  },
})

export function DesignForAll() {
  const { body, attributes } = DESIGN_FOR_ALL
  return (
    <Tenent
      body={body}
      title={attributes.title}
      description={attributes.description}
      image={designForAllImg}
    />
  )
}

export function EmbodyHumility() {
  const { body, attributes } = HUMILITY
  return (
    <Tenent
      body={body}
      title={attributes.title}
      description={attributes.description}
      image={embodyHumilityImg}
    />
  )
}

export function InnovatingOnMoney() {
  const { body, attributes } = INNOVATING
  return (
    <Tenent
      body={body}
      title={attributes.title}
      description={attributes.description}
      image={innovatingOnMoneyImg}
    />
  )
}

export function StrivingForBeauty() {
  const { body, attributes } = BEAUTY
  return (
    <Tenent
      body={body}
      title={attributes.title}
      description={attributes.description}
      image={strivingForBeautyImg}
    />
  )
}
