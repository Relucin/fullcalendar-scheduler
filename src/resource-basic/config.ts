import { getViewConfig, isSingleDay } from 'fullcalendar'
import ResourceBasicView from './ResourceBasicView'
import ResourceMonthView from './ResourceMonthView'

// TODO: make more DRY (with agenda's config too)

getViewConfig('basic').queryResourceClass = function(viewSpec) {
  const explicitGrouping =
    viewSpec.options.groupByResource ||
    viewSpec.options.groupByDateAndResource
  let showsResources = false

  if (explicitGrouping != null) {
    showsResources = explicitGrouping
  } else if (viewSpec.duration) {
    showsResources = isSingleDay(viewSpec.duration)
  }

  if (showsResources) {
    return ResourceBasicView
  }
}

getViewConfig('month').queryResourceClass = function(viewSpec) {
  if (
    viewSpec.options.groupByResource ||
    viewSpec.options.groupByDateAndResource
  ) {
    return ResourceMonthView
  }
}
