import { NextPage } from "next"
import * as React from "react"
import { StyleSheet, View } from "react-native"
import Page, { ICONS_PATH } from "src/experience/brandkit/common/Page"
import CCLicense from "src/experience/common/CCLicense"
import { GAP } from "src/experience/common/constants"
import PageHeadline from "src/experience/common/PageHeadline"
import { NameSpaces, useTranslation } from "src/i18n"
import { hashNav } from "src/shared/menu-items"
import { Explorer } from "./Explorer"

export interface Props {
  icons: IconData[]
}

const IconPage: NextPage<Props> = React.memo(function IconsPage({ icons }: Props) {
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <Page
      title={t("icons.title")}
      metaDescription={t("icons.headline")}
      path={ICONS_PATH}
      sections={[{ id: hashNav.brandIcons.overview, children: <Overview icons={icons} /> }]}
    />
  )
})

export default IconPage

export interface IconData {
  description: string
  name: string
  preview: string
  uri: string
  tags: string[]
  id: string
}

interface OverviewProps {
  icons: IconData[]
}

function Overview({ icons }: OverviewProps) {
  const { t } = useTranslation(NameSpaces.brand)
  return (
    <View style={styles.container}>
      <PageHeadline title={t("icons.title")} headline={t("icons.headline")} />
      <CCLicense textI18nKey="icons.license" />
      <Explorer icons={icons} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: GAP },
})
