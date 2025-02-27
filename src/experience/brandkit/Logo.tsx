import * as React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import Palette from "src/experience/brandkit/color/Palette"
import Page, { LOGO_PATH } from "src/experience/brandkit/common/Page"
import DownloadButton from "src/experience/brandkit/DownloadButton"
import Judgement, { Value } from "src/experience/brandkit/logo/Judgement"
import LogoExample, { Logos } from "src/experience/brandkit/logo/LogoExample"
import LogoWithBackground from "src/experience/brandkit/logo/LogoWithBackground"
import { Digital, Print } from "src/experience/brandkit/logo/Minimums"
import { GLYPH_TRACKING, LOGO_PKG_TRACKING, trackDownload } from "src/experience/brandkit/tracking"
import { brandStyles, GAP } from "src/experience/common/constants"
import { BACKGROUND_PALETTE } from "src/experience/common/data"
import SectionTitle from "src/experience/common/SectionTitle"
import TripplePairing from "src/experience/common/TripplePairing"
import { H1, H4 } from "src/fonts/Fonts"
import { NameSpaces, useTranslation } from "src/i18n"
import { ScreenSizes, useScreenSize } from "src/layout/ScreenSize"
import LogoLightBg from "src/logos/LogoLightBg"
import RingsGlyph from "src/logos/RingsGlyph"
import AspectRatio from "src/shared/AspectRatio"
import Button, { BTN } from "src/shared/Button.3"
import { hashNav } from "src/shared/menu-items"
import { colors, fonts, standardStyles } from "src/styles"

export default React.memo(function Logo() {
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <Page
      title={t("logo.title")}
      metaDescription={"logo.overviewCopy"}
      path={LOGO_PATH}
      sections={[
        { id: hashNav.brandLogo.overview, children: <Overview /> },
        { id: hashNav.brandLogo.space, children: <Clearspace /> },
        { id: hashNav.brandLogo.backgrounds, children: <Backgrounds /> },
      ]}
    />
  )
})

const Overview = React.memo(function _Overview() {
  const { t } = useTranslation(NameSpaces.brand)
  const { screen } = useScreenSize()
  const glyphAreaStyle = screen === ScreenSizes.DESKTOP ? styles.pilar : styles.square

  const onPressDownload = React.useCallback(async () => {
    await trackDownload(LOGO_PKG_TRACKING)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        <H1 style={standardStyles.elementalMarginBottom}>{t("logo.title")}</H1>
        <H4 style={standardStyles.elementalMarginBottom}>{t("logo.overviewCopy")}</H4>
        <Button
          kind={BTN.PRIMARY}
          text={t("logo.overviewBtn")}
          onPress={onPressDownload}
          href="/assets/CeloLogoPackage.zip"
        />
        <View style={[standardStyles.centered, styles.fullScreenLogo]}>
          <LogoLightBg height={100} />
        </View>
        <Text style={[fonts.h5, standardStyles.elementalMargin, standardStyles.blockMarginTop]}>
          {t("logo.logoTitle")}
        </Text>
        <Text style={fonts.p}>{t("logo.logoText")}</Text>
      </View>
      <View style={styles.tiling}>
        <LogoExample
          hasBorder={true}
          logoType={Logos.light}
          background={colors.white}
          href="/assets/CeloColorLogo.zip"
          caption={t("logo.fullColorOnLightCaption")}
        />
        <LogoExample
          hasBorder={false}
          logoType={Logos.dark}
          background={colors.dark}
          href="/assets/CeloColorLogoReverse.zip"
          caption={t("logo.fullColorOnDarkCaption")}
        />
        <LogoExample
          hasBorder={true}
          logoType={Logos.black}
          background={colors.white}
          href="/assets/CeloMonochromeLogo.zip"
          caption={t("logo.monochromeCaption")}
        />
        <LogoExample
          hasBorder={false}
          logoType={Logos.white}
          background={colors.dark}
          href="/assets/CeloMonochromeLogoReverse.zip"
          caption={t("logo.monochromeInverseCaption")}
        />
      </View>
      <View style={styles.gap}>
        <Text style={[fonts.h5, standardStyles.elementalMargin, standardStyles.blockMarginTop]}>
          {t("logo.glyphTitle")}
        </Text>
        <Text style={fonts.p}>{t("logo.glyphText")}</Text>
        <DownloadButton uri="/assets/CeloGlyphs.zip" trackingData={GLYPH_TRACKING} />
        <View style={[styles.tiling, standardStyles.elementalMarginTop]}>
          <View
            style={[standardStyles.centered, glyphAreaStyle, { backgroundColor: colors.faintGray }]}
          >
            <RingsGlyph height={35} />
          </View>
          <View style={[standardStyles.centered, glyphAreaStyle, { backgroundColor: colors.dark }]}>
            <RingsGlyph height={35} darkMode={true} />
          </View>
          <View
            style={[
              standardStyles.centered,
              glyphAreaStyle,
              { backgroundColor: colors.faintPurple },
            ]}
          >
            <RingsGlyph height={35} color={colors.black} />
          </View>
          <View
            style={[standardStyles.centered, glyphAreaStyle, { backgroundColor: colors.primary }]}
          >
            <RingsGlyph height={35} color={colors.white} />
          </View>
        </View>
      </View>
    </View>
  )
})

const Clearspace = React.memo(function ClearSpace() {
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <>
      <View style={styles.gap}>
        <SectionTitle>{t("logo.spaceSizeTitle")}</SectionTitle>
      </View>
      <Text
        style={[
          fonts.h5,
          styles.gap,
          standardStyles.elementalMargin,
          standardStyles.blockMarginTop,
        ]}
      >
        {t("logo.clearspaceTitle")}
      </Text>
      <View style={styles.gap}>
        <Text style={fonts.p}>{t("logo.clearspaceText")}</Text>
        <View
          style={[
            standardStyles.centered,
            standardStyles.elementalMarginTop,
            styles.clearspaceImageArea,
          ]}
        >
          <AspectRatio ratio={714 / 357} style={styles.clearspaceImage}>
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              source={require("src/experience/brandkit/images/ClearspaceImage.png")}
              style={standardStyles.image}
            />
          </AspectRatio>
        </View>
      </View>
      <View>
        <Text
          style={[
            fonts.h5,
            styles.gap,
            standardStyles.elementalMargin,
            standardStyles.blockMarginTop,
          ]}
        >
          {t("logo.sizeTitle")}
        </Text>
        <Text style={[fonts.p, styles.gap]}>{t("logo.sizeText")}</Text>
        <View style={[styles.tiling, standardStyles.blockMarginTopMobile]}>
          <AspectRatio ratio={345 / 172} style={[styles.sizing, brandStyles.gap]}>
            <Digital />
          </AspectRatio>
          <AspectRatio ratio={345 / 172} style={[styles.sizing, brandStyles.gap]}>
            <Print />
          </AspectRatio>
        </View>
      </View>
    </>
  )
})

function Backgrounds() {
  const { t } = useTranslation(NameSpaces.brand)

  return (
    <View>
      <View style={styles.gap}>
        <SectionTitle>{t("logo.backgroundsTitle")}</SectionTitle>
      </View>
      <Palette colors={BACKGROUND_PALETTE} text={t("logo.backgroundsTextTop")} />
      <View style={[styles.tiling, standardStyles.elementalMarginBottom]}>
        <View style={[styles.gap, styles.container, styles.backgroundExample]}>
          <LogoWithBackground backgroundColor={colors.faintGray} type="light" />
        </View>
        <View style={[styles.gap, styles.container, styles.backgroundExample]}>
          <LogoWithBackground backgroundColor={colors.faintGold} type="light" />
        </View>
        <View style={[styles.gap, styles.container, styles.backgroundExample]}>
          <LogoWithBackground backgroundColor={colors.dark} type="dark" />
        </View>
      </View>
      <Text
        style={[
          fonts.h5,
          styles.gap,
          standardStyles.elementalMargin,
          standardStyles.blockMarginTop,
        ]}
      >
        {t("logo.colorBackgroundsTitle")}
      </Text>
      <Text style={[fonts.p, styles.gap]}>{t("logo.colorBackgroundsText")}</Text>

      <TripplePairing
        first={
          <>
            <View style={[styles.gap, styles.container]}>
              <LogoWithBackground backgroundColor={colors.faintPurple} type="black" />
            </View>
            <View style={[styles.gap, styles.container]}>
              <LogoWithBackground backgroundColor={colors.purpleScreen} type="white" />
            </View>
          </>
        }
        second={
          <>
            <View style={[styles.gap, styles.container]}>
              <LogoWithBackground backgroundColor={colors.faintRed} type="black" />
            </View>

            <View style={[styles.gap, styles.container]}>
              <LogoWithBackground backgroundColor={colors.redScreen} type="white" />
            </View>
          </>
        }
        third={
          <>
            <View style={[styles.gap, styles.container]}>
              <LogoWithBackground backgroundColor={colors.faintCyan} type="black" />
            </View>
            <View style={[styles.gap, styles.container]}>
              <LogoWithBackground backgroundColor={colors.cyan} type="white" />
            </View>
          </>
        }
      />
      <Text style={[styles.gap, fonts.p, standardStyles.elementalMargin]}>
        {t("logo.backgroundDoNotAndDo")}
      </Text>
      <TripplePairing
        first={
          <>
            <Judgement is={Value.Bad}>
              <LogoWithBackground
                image={require("src/experience/brandkit/images/lilah.jpg")}
                type="dark"
              />
            </Judgement>
            <Judgement is={Value.Good}>
              <LogoWithBackground
                backgroundColor={colors.dark}
                image={require("src/experience/brandkit/images/lilahOverlay.jpg")}
                type="white"
              />
            </Judgement>
          </>
        }
        second={
          <>
            <Judgement is={Value.Bad}>
              <LogoWithBackground backgroundColor={colors.faintPurple} type="light" />
            </Judgement>
            <Judgement is={Value.Good}>
              <LogoWithBackground backgroundColor={colors.faintPurple} type="black" />
            </Judgement>
          </>
        }
        third={
          <>
            <Judgement is={Value.Bad}>
              <LogoWithBackground backgroundColor={colors.cyan} type="dark" />
            </Judgement>
            <Judgement is={Value.Good}>
              <LogoWithBackground backgroundColor={colors.cyan} type="white" />
            </Judgement>
          </>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: GAP,
  },

  pilar: { minWidth: 175, flex: 1, height: 350 },
  square: { minWidth: 175, flex: 1, height: 170 },
  gap: { marginHorizontal: GAP },
  tiling: {
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  clearspaceImage: {
    maxWidth: 600,
    width: "100%",
    marginVertical: 10,
  },
  clearspaceImageArea: {
    backgroundColor: colors.white,
    padding: 30,
  },
  sizing: {
    flex: 1,
    minWidth: 280,
    marginVertical: GAP,
  },
  backgroundExample: {
    minWidth: 145,
  },
  fullScreenLogo: { width: "100%", marginVertical: 100 },
})
