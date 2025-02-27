import { EventProps } from "fullstack/EventProps"
import * as React from "react"
import { View } from "react-native"
import Events from "src/community/connect/Events"
import { getEvents } from "src/community/connect/EventsData"
import OpenGraph from "src/header/OpenGraph"
import { standardStyles } from "src/styles"

const preview = require("src/community/connect/preview.jpg")

interface State {
  pastEvents: EventProps[]
  loading: boolean
  error: boolean
}

export default class PastEventsPage extends React.PureComponent<Record<string, never>, State> {
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  state = {
    error: false,
    loading: true,
    pastEvents: [],
  }

  async componentDidMount() {
    const { pastEvents } = await getEvents("upcoming=false")
    if (pastEvents?.length) {
      this.setState({ pastEvents, loading: false })
    } else {
      this.setState({ loading: false, error: true })
    }
  }

  componentDidCatch(error, errorInfo) {
    console.warn(error, errorInfo)
  }

  render() {
    return (
      <View style={standardStyles.sectionMargin}>
        <OpenGraph
          path="/past-events"
          title={"Past Celo Events"}
          description="List of past Celo community events around the world. Join the conversation and our community. Diverse perspectives and inclusive conversations welcomed."
          image={preview}
        />
        <Events
          pastEvents={this.state.error ? [] : this.state.pastEvents}
          loading={this.state.loading}
        />
      </View>
    )
  }
}
