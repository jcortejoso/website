import { NextPage } from "next"
import * as React from "react"
import { StyleSheet, Text, View } from "react-native"
import AssetProps from "src/../fullstack/AssetProps"
import Page, { IMAGERY_PATH } from "src/experience/brandkit/common/Page"
import { AssetTypes } from "src/experience/brandkit/tracking"
import CCLicense from "src/experience/common/CCLicense"
import { brandStyles } from "src/experience/common/constants"
import PageHeadline from "src/experience/common/PageHeadline"
import Showcase from "src/experience/common/Showcase"
import { H2 } from "src/fonts/Fonts"
import { NameSpaces, useTranslation } from "src/i18n"
import { ScreenSizes, useScreenSize } from "src/layout/ScreenSize"
import { hashNav } from "src/shared/menu-items"
import { fonts, standardStyles } from "src/styles"

const { brandImagery } = hashNav

interface Props {
  illos: AssetProps[]
  graphics: AssetProps[]
}

const KeyImageryWrapped: NextPage<Props> = React.memo(function KeyImagery({
  illos,
  graphics,
}: Props) {
  const { t } = useTranslation(NameSpaces.brand)

  return (
    <Page
      title={t("keyImagery.title")}
      metaDescription={t("keyImagery.headline")}
      path={IMAGERY_PATH}
      sections={[
        {
          id: brandImagery.overview,
          children: <Overview />,
        },
        {
          id: brandImagery.illustrations,
          children: <Illustrations data={illos} />,
        },
        { id: brandImagery.graphics, children: <AbstractGraphics data={graphics} /> },
      ]}
    />
  )
})

export default KeyImageryWrapped

function Overview() {
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <View>
      <PageHeadline title={t("keyImagery.title")} headline={t("keyImagery.headline")} />
      <CCLicense textI18nKey="keyImagery.license" />
    </View>
  )
}

function useIlloSize() {
  const { screen } = useScreenSize()
  switch (screen) {
    case ScreenSizes.DESKTOP:
      return 340
    case ScreenSizes.MOBILE:
      return 345
    case ScreenSizes.TABLET:
      return 222
  }
}

interface IlloProps {
  data: AssetProps[]
}

const Illustrations = React.memo(function _Illustrations({ data }: IlloProps) {
  const size = useIlloSize()
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <View style={standardStyles.blockMarginTopTablet}>
      <H2 style={[brandStyles.gap, standardStyles.elementalMarginBottom]}>
        {t("keyImagery.illoTitle")}
      </H2>
      <Text style={[brandStyles.gap, fonts.p]}>{t("keyImagery.illoText")}</Text>
      <View style={[brandStyles.tiling, styles.illustrationsArea]}>
        {data &&
          data.map((illo) => (
            <Showcase
              key={illo.id}
              ratio={1.3}
              assetType={AssetTypes.illustration}
              description={illo.description}
              name={illo.name}
              preview={illo.preview}
              uri={illo.uri}
              loading={false}
              size={size}
            />
          ))}
      </View>
    </View>
  )
})

interface GraphicsProps {
  data: AssetProps[]
}

const AbstractGraphics = React.memo(function _AbstractGraphics({ data }: GraphicsProps) {
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <View style={standardStyles.sectionMarginTop}>
      <H2 style={[brandStyles.gap, standardStyles.elementalMarginBottom]}>
        {t("keyImagery.abstractTitle")}
      </H2>
      <Text style={[brandStyles.gap, fonts.p]}>{t("keyImagery.abstractText")}</Text>
      <View style={brandStyles.tiling}>
        {data &&
          data.map((graphic) => (
            <Showcase
              key={graphic.id}
              ratio={344 / 172}
              assetType={AssetTypes.graphic}
              description={graphic.description}
              name={graphic.name}
              preview={graphic.preview}
              uri={graphic.uri}
              loading={false}
              size={"100%"}
            />
          ))}
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  fillSpace: {
    minHeight: "60vh",
  },
  illustrationsArea: {
    justifyContent: "space-between",
  },
})
