/* @flow */
import { Logger } from 'Shared/services/Logger';
import { env } from 'Shared/env';

const MIXPANEL_TOKEN = env.isProductionUrl()
  ? 'c1b88044cfaf328aeada3e6c16bec5ba'
  : 'd6ee57431516162bc7bbbcd173bb876d';
const MIXPANEL_SCRIPT_URL =
  'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';

type MixpanelEventParams = {
  source: string,
  location: string,
  url: string,
  country: string,
  language: string,
  referer?: string,
  question: string,
  cardPosition?: string,
  sequenceId?: string,
  proposalId?: string,
  questionId?: string,
  questionSlug?: string,
  distinctId?: String,
};

const mixpnl = {
  load() {
    if (this.isLoaded()) {
      return;
    }

    try {
      /* eslint-disable */
      (function(f,b){if(!b.__SV){var e,g,i,h;window.mixpanel=b;b._i=[];b.init=function(e,f,c){function g(a,d){var b=d.split(".");2==b.length&&(a=a[b[0]],d=b[1]);a[d]=function(){a.push([d].concat(Array.prototype.slice.call(arguments,0)))}}var a=b;"undefined"!==typeof c?a=b[c]=[]:c="mixpanel";a.people=a.people||[];a.toString=function(a){var d="mixpanel";"mixpanel"!==c&&(d+="."+c);a||(d+=" (stub)");return d};a.people.toString=function(){return a.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
  for(h=0;h<i.length;h++)g(a,i[h]);var j="set set_once union unset remove delete".split(" ");a.get_group=function(){function b(c){d[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));a.push([e,call2])}}for(var d={},e=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<j.length;c++)b(j[c]);return d};b._i.push([e,f,c])};b.__SV=1.2;e=f.createElement("script");e.type="text/javascript";e.async=!0;e.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
  MIXPANEL_CUSTOM_LIB_URL:MIXPANEL_SCRIPT_URL;g=f.getElementsByTagName("script")[0];g.parentNode.insertBefore(e,g)}})(document,window.mixpanel||[]);

      window.mixpanel.init(MIXPANEL_TOKEN, {
        api_host: 'https://api-eu.mixpanel.com',
        opt_out_tracking_by_default: false,
        disable_persistence: true,
        // debug: true
      });

      /* eslint-enable */
    } catch (e) {
      Logger.logError(e);
    }
  },
  isLoaded() {
    return window && window.mixpanel;
  },
};

export const isMixpanelInitialized = (): boolean => !!mixpnl.isLoaded();

export const MixpanelTracking = {
  init(): void {
    mixpnl.load();
  },
  isInitialized(): void {
    return isMixpanelInitialized();
  },
  track(eventName: string, eventParameters: MixpanelEventParams): void {
    if (!isMixpanelInitialized()) {
      Logger.logWarning({
        message: `Failed to track event ${eventName}: MixpanelTracking should be initialized`,
        name: 'tracking-init',
      });
      return;
    }
    if (!eventParameters.distinctId) {
      Logger.logWarning({
        message: `Failed to track event ${eventName}: empty distinctId`,
        name: 'tracking-init',
      });
      return;
    }

    if (env.isDev() || env.isTest()) {
      // eslint-disable-next-line no-console
      console.info(
        `Tracking Custom Mixpanel (${MIXPANEL_TOKEN})
        event => ${eventName}
        params => ${JSON.stringify(eventParameters)}`
      );
      return;
    }

    try {
      window.mixpanel.identify(eventParameters.distinctId);
      // eslint-disable-next-line no-param-reassign
      delete eventParameters.distinctId;
      window.mixpanel.track(eventName, eventParameters);
    } catch (e) {
      Logger.logError(e);
    }
  },
};
