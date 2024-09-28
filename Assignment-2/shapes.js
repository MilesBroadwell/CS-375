<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#394B58">
  <meta name="robots" content="noindex,nofollow" />
  <meta name="apple-itunes-app" content="app-id=480883488">
<link rel="manifest" href="/web-app-manifest/manifest.json">
  <meta name="sentry-trace" content="541ef913a807425cb99beffa09d71138-4165d306b9e24b2a-0"/>
  <title>  shapes.js: CS-375-001-24-FA: Computer Graphics
</title>

  <link rel="preload" href="https://du11hjcvx0uqb.cloudfront.net/dist/fonts/lato/extended/Lato-Regular-bd03a2cc27.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="https://du11hjcvx0uqb.cloudfront.net/dist/fonts/lato/extended/Lato-Bold-cccb897485.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="https://du11hjcvx0uqb.cloudfront.net/dist/fonts/lato/extended/Lato-Italic-4eb103b4d1.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="stylesheet" href="https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/no_variables/bundles/fonts-6ee09b0b2f.css" media="screen" />
  <link rel="stylesheet" href="https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/default/variables-high_contrast-7dd4b80918af0e0218ec0229e4bd5873.css" media="all" />
  <link rel="stylesheet" href="https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/new_styles_high_contrast/bundles/common-adaf37055c.css" media="all" />
  <link rel="stylesheet" href="https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/new_styles_high_contrast/bundles/new_user_tutorials-6b15f87caf.css" media="screen" />
  <link rel="apple-touch-icon" href="https://du11hjcvx0uqb.cloudfront.net/dist/images/apple-touch-icon-585e5d997d.png" />
  <link rel="icon" type="image/x-icon" href="https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico" />

  <link rel="stylesheet" href="https://instructure-uploads.s3.amazonaws.com/account_117500000000000001/attachments/3666538/Canvas%20CSS.css" media="all" />
  
  <script>if (navigator.userAgent.match(/(MSIE|Trident\/)/)) location.replace('/ie-is-not-supported.html')</script>
  <script>
    INST = {"environment":"production","allowMediaComments":true,"kalturaSettings":{"domain":"nv.instructuremedia.com","resource_domain":"nv.instructuremedia.com","rtmp_domain":"iad.rtmp.instructuremedia.com","partner_id":"9","subpartner_id":"0","player_ui_conf":"0","kcw_ui_conf":"0","upload_ui_conf":"0","max_file_size_bytes":534773760,"do_analytics":false,"hide_rte_button":false,"js_uploader":true},"logPageViews":true,"editorButtons":[{"name":"Commons Favorites","id":31,"favorite":false,"url":"https://lor.instructure.com/api/lti/favorite-resources","icon_url":"https://lor.instructure.com/img/icon_commons.png","canvas_icon_class":null,"width":800,"height":400,"use_tray":true,"on_by_default":false,"description":"\u003cp\u003eFind and share course content\u003c/p\u003e\n"},{"name":"YouTube","id":454,"favorite":false,"url":"https://www.edu-apps.org/lti_public_resources/?tool_id=youtube","icon_url":"https://www.edu-apps.org/assets/lti_public_resources/youtube_icon.png","canvas_icon_class":null,"width":560,"height":600,"use_tray":false,"on_by_default":false,"description":"\u003cp\u003eSearch publicly available YouTube videos. A new icon will show up in your course rich editor letting you search YouTube and click to embed videos in your course material.\u003c/p\u003e\n"},{"name":"YuJa Media","id":824,"favorite":true,"url":"https://sonoma.yuja.com/LMSEntry.jsp","icon_url":"https://sonoma.yuja.com/Dashboard/icons/yuja_basic.png","canvas_icon_class":null,"width":800,"height":600,"use_tray":false,"on_by_default":false,"description":"\u003cp\u003eYuJa is an Enterprise Video Platform.\u003c/p\u003e\n"},{"name":"Insert EquatIO Equation","id":1128,"favorite":false,"url":"https://equatio-lti.texthelp.com","icon_url":"https://m.equat.io/client/icon_16x16.png","canvas_icon_class":null,"width":800,"height":520,"use_tray":false,"on_by_default":false,"description":""},{"name":"Google Drive (LTI 1.3)","id":3249,"favorite":true,"url":"https://assignments.google.com/lti/e","icon_url":"https://www.gstatic.com/images/branding/product/1x/drive_2020q4_16dp.png","canvas_icon_class":null,"width":690,"height":530,"use_tray":false,"on_by_default":false,"description":"\u003cp\u003eCollect, analyze, and grade student work with Google Assignments\u003c/p\u003e\n"}]};
    ENV = {"ASSET_HOST":"https://du11hjcvx0uqb.cloudfront.net","active_brand_config_json_url":"https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/default/variables-high_contrast-7dd4b80918af0e0218ec0229e4bd5873.json","active_brand_config":null,"confetti_branding_enabled":false,"url_to_what_gets_loaded_inside_the_tinymce_editor_css":["https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/default/variables-high_contrast-7dd4b80918af0e0218ec0229e4bd5873.css","https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/new_styles_high_contrast/bundles/what_gets_loaded_inside_the_tinymce_editor-795277483f.css","https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/no_variables/bundles/fonts-6ee09b0b2f.css"],"url_for_high_contrast_tinymce_editor_css":["https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/default/variables-high_contrast-7dd4b80918af0e0218ec0229e4bd5873.css","https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/new_styles_high_contrast/bundles/what_gets_loaded_inside_the_tinymce_editor-795277483f.css","https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/no_variables/bundles/fonts-6ee09b0b2f.css"],"current_user_id":"55834","current_user_global_id":"117500000000055834","current_user_heap_id":"uu-2-dc0350534585050b4a23ab00860a411e6b6c22c8654739fbfc25ff5c9af97a52-QCUCd289TXbdFfPcM1UWgbXNJpxICmlrjkUXhDPb","current_user_roles":["user","student"],"current_user_is_student":true,"current_user_types":[],"current_user_disabled_inbox":false,"current_user_visited_tabs":null,"discussions_reporting":true,"files_domain":"cluster91.canvas-user-content.com","group_information":null,"DOMAIN_ROOT_ACCOUNT_ID":"117500000000000001","DOMAIN_ROOT_ACCOUNT_UUID":"QCUCd289TXbdFfPcM1UWgbXNJpxICmlrjkUXhDPb","k12":false,"help_link_name":"Help","help_link_icon":"help","use_high_contrast":true,"auto_show_cc":false,"disable_celebrations":false,"disable_keyboard_shortcuts":false,"LTI_LAUNCH_FRAME_ALLOWANCES":["geolocation *","microphone *","camera *","midi *","encrypted-media *","autoplay *","clipboard-write *","display-capture *"],"DEEP_LINKING_POST_MESSAGE_ORIGIN":"https://canvas.sonoma.edu","comment_library_suggestions_enabled":false,"SETTINGS":{"open_registration":false,"collapse_global_nav":false,"release_notes_badge_disabled":false,"can_add_pronouns":true,"show_sections_in_course_tray":true},"RAILS_ENVIRONMENT":"Production","IN_PACED_COURSE":false,"SENTRY_FRONTEND":{"dsn":"https://355a1d96717e4038ac25aa852fa79a8f@relay-iad.sentry.insops.net/388","org_slug":"instructure","base_url":"https://sentry.insops.net","normalized_route":"/courses/{course_id}/files/{id}","errors_sample_rate":"0.005","traces_sample_rate":"0.005","url_deny_pattern":"instructure-uploads.*amazonaws.com","revision":"canvas-lms@20240925.190"},"DATA_COLLECTION_ENDPOINT":"https://canvas-frontend-data-iad-prod.inscloudgate.net/submit","DOMAIN_ROOT_ACCOUNT_SFID":"001A000000CAQaaIAH","DIRECT_SHARE_ENABLED":false,"CAN_VIEW_CONTENT_SHARES":false,"FEATURES":{"featured_help_links":true,"account_level_blackout_dates":false,"render_both_to_do_lists":false,"commons_new_quizzes":false,"course_paces_redesign":true,"course_paces_for_students":true,"explicit_latex_typesetting":false,"media_links_use_attachment_id":true,"permanent_page_links":true,"selective_release_backend":true,"selective_release_ui_api":true,"selective_release_edit_page":true,"enhanced_course_creation_account_fetching":false,"instui_for_import_page":false,"multiselect_gradebook_filters":true,"assignment_edit_placement_not_on_announcements":false,"instui_header":false,"rce_find_replace":true,"courses_popout_sisid":true,"dashboard_graphql_integration":false,"discussion_checkpoints":false,"speedgrader_studio_media_capture":true,"disallow_threaded_replies_fix_alert":true,"product_tours":false,"usage_rights_discussion_topics":true,"granular_permissions_manage_users":true,"create_course_subaccount_picker":true,"file_verifiers_for_quiz_links":true,"lti_deep_linking_module_index_menu_modal":true,"lti_dynamic_registration":true,"lti_registrations_next":false,"lti_multiple_assignment_deep_linking":true,"lti_overwrite_user_url_input_select_content_dialog":true,"buttons_and_icons_root_account":false,"extended_submission_state":false,"scheduled_page_publication":true,"send_usage_metrics":true,"rce_transform_loaded_content":false,"mobile_offline_mode":false,"react_discussions_post":true,"instui_nav":false,"enhanced_developer_keys_tables":true,"lti_registrations_discover_page":false,"account_level_mastery_scales":false,"non_scoring_rubrics":true,"top_navigation_placement":false,"rubric_criterion_range":true,"lti_migration_info":true,"rce_lite_enabled_speedgrader_comments":true,"lti_toggle_placements":true,"embedded_release_notes":true,"canvas_k6_theme":false,"new_math_equation_handling":true},"current_user":{"id":"55834","anonymous_id":"172y","display_name":"Miles Broadwell","avatar_image_url":"https://canvas.sonoma.edu/images/messages/avatar-50.png","html_url":"https://canvas.sonoma.edu/about/55834","pronouns":null,"avatar_is_fallback":true,"email":"broadwellm@sonoma.edu"},"current_user_is_admin":false,"page_view_update_url":"/page_views/2f367346-3c2b-4473-82b3-73e55f1f3212?page_view_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpIjoiMmYzNjczNDYtM2MyYi00NDczLTgyYjMtNzNlNTVmMWYzMjEyIiwidSI6MTE3NTAwMDAwMDAwMDU1ODM0LCJjIjoiMjAyNC0wOS0yOFQyMzoyMjoyMi4zMloifQ.BdHP4yHk346BKL8CdX1dTx9E1WHElLlhXuMGTA37eP0","context_asset_string":"course_42248","ping_url":"https://canvas.sonoma.edu/api/v1/courses/42248/ping","TIMEZONE":"America/Los_Angeles","CONTEXT_TIMEZONE":"America/Los_Angeles","LOCALES":["en"],"BIGEASY_LOCALE":"en_US","FULLCALENDAR_LOCALE":"en","MOMENT_LOCALE":"en","rce_auto_save_max_age_ms":86400000,"K5_USER":false,"USE_CLASSIC_FONT":false,"K5_HOMEROOM_COURSE":false,"K5_SUBJECT_COURSE":false,"LOCALE_TRANSLATION_FILE":"/dist/javascripts/translations/en-67c25a6858.json","ACCOUNT_ID":"19","user_cache_key":"VEl5b0FYeG9YSVA2bXR1NTg3cWJZY1g4SnJWaHdtN3ZQemlBMU9Fb3Z5Zlc9\nO1twLTA/OntQXz1IVXBncmFxZTtuamFsa2hwdm9pdWxraW1tYXFld2c=\n","current_context":{"id":"42248","name":"CS-375-001-24-FA: Computer Graphics","type":"Course","url":"https://canvas.sonoma.edu/courses/42248"},"badge_counts":{"submissions":0},"notices":[],"active_context_tab":"files"};
    BRANDABLE_CSS_HANDLEBARS_INDEX = [["new_styles_normal_contrast","new_styles_high_contrast","new_styles_normal_contrast_rtl","new_styles_high_contrast_rtl"],{"10":["908ffbc673",0,"d5c9044c6e",2],"15":["c8540c43a4",0,"0a2196be1d",2],"19":["df5777ed9c"],"61":["1fb36890db","b83a603352","4bcf82f85a","0b171e092c"],"67":["700335fb7b",0,"1cc2485e2c",2],"71":["8ac0336ef0","bf3093677a","a8146a011b","449171073f"],"06":["ba28819778",0,"96b99aafe5",2],"f0":["b349f31f5e",0,0,0],"c8":["718c8509f5","33cd4c40e3","03d0fbcbe8","ec23096f0d"],"1e":["6eb4ecac8e","4100cb65ce","0faf4716c8","bed54fd75e"],"b3":["e5da23fb43","0911fc8ed3","05b2bb5a6f","ba2585de5c"],"0c":["4dae5befd2",0,"c18876be89",2],"da":["b5a7f9cd8f","a4e5066985","773390ae11","8e9071910c"],"1d":["2128789890",0,"e568085637",2],"08":["64bff5a97d"],"e2":["11429f119a"],"9f":["d39b291ba6",0,0,0],"2b":["c491abf31e","b11dc54da6","b58622671f","6bb4a7ae9e"],"2c":["8a926fc28b",0,0,0],"c2":["6f2721ae01"],"9c":["c31821c764",0,"1693aba1da",2],"c5":["44c6024769","31150a4a27","53dd277fa9","5fe61c91c2"],"f2":["51574f9b13"]}]
    REMOTES = {};
  </script>
  <script src="https://du11hjcvx0uqb.cloudfront.net/dist/brandable_css/default/variables-high_contrast-7dd4b80918af0e0218ec0229e4bd5873.js" defer="defer"></script>
  <script src="https://du11hjcvx0uqb.cloudfront.net/dist/timezone/America/Los_Angeles-6699c54112.js" defer="defer"></script>
  <script src="https://du11hjcvx0uqb.cloudfront.net/dist/timezone/America/Los_Angeles-6699c54112.js" defer="defer"></script>
  <script src="https://du11hjcvx0uqb.cloudfront.net/dist/timezone/en_US-80a0ce259b.js" defer="defer"></script>
  <script src="https://du11hjcvx0uqb.cloudfront.net/dist/webpack-production/react-entry-d6972cd7700667c0.js" crossorigin="anonymous" defer="defer"></script>
  <script src="https://du11hjcvx0uqb.cloudfront.net/dist/webpack-production/main-entry-6597a045012385b0.js" crossorigin="anonymous" defer="defer"></script>
<script>
//<![CDATA[
(window.bundles || (window.bundles = [])).push('module_sequence_footer');
(window.bundles || (window.bundles = [])).push('file_show');
(window.bundles || (window.bundles = [])).push('navigation_header');
//]]>
</script>
  
  <script type="text/javascript">
    window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
    heap.load("3001039959");
    heap.clearEventProperties();
    heap.addEventProperties({'Base.appName': 'Canvas'});
    setTimeout(() => {
      if (ENV.current_user_heap_id && ENV.current_user_heap_id !== heap.identity) {
        heap.identify(ENV.current_user_heap_id);
      }
      props = {}
      if (ENV.current_user_roles) {
        props['role'] = ENV.current_user_roles[ENV.current_user_roles.length - 1]
      }
      if (ENV.DOMAIN_ROOT_ACCOUNT_UUID) {
        props['Canvas.accountId'] = ENV.DOMAIN_ROOT_ACCOUNT_UUID
      }
      if (ENV.DOMAIN_ROOT_ACCOUNT_SFID) {
        props['Canvas.salesforceAccountId'] = ENV.DOMAIN_ROOT_ACCOUNT_SFID
      }
      if (Object.keys(props).length > 0) {
        heap.addUserProperties(props);
      }
    }, 1000);
  </script>
</head>

<body class="with-left-side course-menu-expanded files primary-nav-expanded full-width context-course_42248 responsive_student_grades_page">

<noscript>
  <div role="alert" class="ic-flash-static ic-flash-error">
    <div class="ic-flash__icon" aria-hidden="true">
      <i class="icon-warning"></i>
    </div>
    <h1>You need to have JavaScript enabled in order to access this site.</h1>
  </div>
</noscript>




<div id="flash_message_holder"></div>
<div id="flash_screenreader_holder"></div>

<div id="application" class="ic-app">
  




<header id="mobile-header" class="no-print">
  <button type="button" class="Button Button--icon-action-rev Button--large mobile-header-hamburger">
    <i class="icon-solid icon-hamburger"></i>
    <span id="mobileHeaderInboxUnreadBadge" class="menu-item__badge" style="min-width: 0; top: 12px; height: 12px; right: 6px; display:none;"></span>
    <span class="screenreader-only">Dashboard</span>
  </button>
  <div class="mobile-header-space"></div>
    <a class="mobile-header-title expandable" href="/courses/42248" role="button" aria-controls="mobileContextNavContainer">
      <div>CS-375-001-24-FA</div>
        <div>shapes.js</div>
    </a>
    <div class="mobile-header-space"></div>
    <button type="button" class="Button Button--icon-action-rev Button--large mobile-header-arrow" aria-label="Navigation Menu">
      <i class="icon-arrow-open-down" id="mobileHeaderArrowIcon"></i>
    </button>
</header>
<nav id="mobileContextNavContainer"></nav>

<header id="header" class="ic-app-header no-print ">
  <a href="#content" id="skip_navigation_link">Skip To Content</a>
  <div role="region" class="ic-app-header__main-navigation" aria-label="Global Navigation">
    <ul id="menu" class="ic-app-header__menu-list">
        <li class="menu-item ic-app-header__menu-list-item ">
          <a id="global_nav_profile_link" role="button" href="/profile/settings" class="ic-app-header__menu-list-link">
            <div class="menu-item-icon-container">
              <div aria-hidden="true" class="fs-exclude ic-avatar ">
                <img src="https://canvas.sonoma.edu/images/messages/avatar-50.png" alt="Miles Broadwell" />
              </div>
              <span class="menu-item__badge"></span>
            </div>
            <div class="menu-item__text">
              Account
            </div>
          </a>
        </li>
      <li class="ic-app-header__menu-list-item ">
        <a id="global_nav_dashboard_link" href="https://canvas.sonoma.edu/" class="ic-app-header__menu-list-link">
          <div class="menu-item-icon-container" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--dashboard" version="1.1" x="0" y="0" viewBox="0 0 280 200" enable-background="new 0 0 280 200" xml:space="preserve"><path d="M273.09,180.75H197.47V164.47h62.62A122.16,122.16,0,1,0,17.85,142a124,124,0,0,0,2,22.51H90.18v16.29H6.89l-1.5-6.22A138.51,138.51,0,0,1,1.57,142C1.57,65.64,63.67,3.53,140,3.53S278.43,65.64,278.43,142a137.67,137.67,0,0,1-3.84,32.57ZM66.49,87.63,50.24,71.38,61.75,59.86,78,76.12Zm147,0L202,76.12l16.25-16.25,11.51,11.51ZM131.85,53.82v-23h16.29v23Zm15.63,142.3a31.71,31.71,0,0,1-28-16.81c-6.4-12.08-15.73-72.29-17.54-84.25a8.15,8.15,0,0,1,13.58-7.2c8.88,8.21,53.48,49.72,59.88,61.81a31.61,31.61,0,0,1-27.9,46.45ZM121.81,116.2c4.17,24.56,9.23,50.21,12,55.49A15.35,15.35,0,1,0,161,157.3C158.18,152,139.79,133.44,121.81,116.2Z" /></svg>

          </div>
          <div class="menu-item__text">
            Dashboard
          </div>
        </a>
      </li>
        <li class="menu-item ic-app-header__menu-list-item ic-app-header__menu-list-item--active">
          <a id="global_nav_courses_link" role="button" href="/courses" class="ic-app-header__menu-list-link">
            <div class="menu-item-icon-container" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--courses" version="1.1" x="0" y="0" viewBox="0 0 280 259" enable-background="new 0 0 280 259" xml:space="preserve"><path d="M73.31,198c-11.93,0-22.22,8-24,18.73a26.67,26.67,0,0,0-.3,3.63v.3a22,22,0,0,0,5.44,14.65,22.47,22.47,0,0,0,17.22,8H200V228.19h-134V213.08H200V198Zm21-105.74h90.64V62H94.3ZM79.19,107.34V46.92H200v60.42Zm7.55,30.21V122.45H192.49v15.11ZM71.65,16.71A22.72,22.72,0,0,0,49,39.36V190.88a41.12,41.12,0,0,1,24.32-8h157V16.71ZM33.88,39.36A37.78,37.78,0,0,1,71.65,1.6H245.36V198H215.15v45.32h22.66V258.4H71.65a37.85,37.85,0,0,1-37.76-37.76Z"/></svg>

            </div>
            <div class="menu-item__text">
              Courses
            </div>
          </a>
        </li>
      <li class="menu-item ic-app-header__menu-list-item ">
        <a id="global_nav_calendar_link" href="/calendar" class="ic-app-header__menu-list-link">
          <div class="menu-item-icon-container" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--calendar" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M197.07,213.38h16.31V197.07H197.07Zm-16.31,16.31V180.76h48.92v48.92Zm-48.92-16.31h16.31V197.07H131.85Zm-16.31,16.31V180.76h48.92v48.92ZM66.62,213.38H82.93V197.07H66.62ZM50.32,229.68V180.76H99.24v48.92Zm146.75-81.53h16.31V131.85H197.07Zm-16.31,16.31V115.54h48.92v48.92Zm-48.92-16.31h16.31V131.85H131.85Zm-16.31,16.31V115.54h48.92v48.92ZM66.62,148.15H82.93V131.85H66.62ZM50.32,164.46V115.54H99.24v48.92ZM34,262.29H246V82.93H34ZM246,66.62V42.16A8.17,8.17,0,0,0,237.84,34H213.38v8.15a8.15,8.15,0,1,1-16.31,0V34H82.93v8.15a8.15,8.15,0,0,1-16.31,0V34H42.16A8.17,8.17,0,0,0,34,42.16V66.62Zm-8.15-48.92a24.49,24.49,0,0,1,24.46,24.46V278.6H17.71V42.16A24.49,24.49,0,0,1,42.16,17.71H66.62V9.55a8.15,8.15,0,0,1,16.31,0v8.15H197.07V9.55a8.15,8.15,0,1,1,16.31,0v8.15Z"/></svg>

          </div>
          <div class="menu-item__text">
            Calendar
          </div>
        </a>
      </li>
      <li class="menu-item ic-app-header__menu-list-item ">
      <!-- TODO: Add back global search when available -->
        <a id="global_nav_conversations_link" href="/conversations" class="ic-app-header__menu-list-link">
          <div class="menu-item-icon-container">
            <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--inbox" version="1.1" x="0" y="0" viewBox="0 0 280 280" enable-background="new 0 0 280 280" xml:space="preserve"><path d="M91.72,120.75h96.56V104.65H91.72Zm0,48.28h80.47V152.94H91.72Zm0-96.56h80.47V56.37H91.72Zm160.94,34.88H228.52V10.78h-177v96.56H27.34A24.17,24.17,0,0,0,3.2,131.48V244.14a24.17,24.17,0,0,0,24.14,24.14H252.66a24.17,24.17,0,0,0,24.14-24.14V131.48A24.17,24.17,0,0,0,252.66,107.34Zm0,16.09a8.06,8.06,0,0,1,8,8v51.77l-32.19,19.31V123.44ZM67.58,203.91v-177H212.42v177ZM27.34,123.44H51.48v79.13L19.29,183.26V131.48A8.06,8.06,0,0,1,27.34,123.44ZM252.66,252.19H27.34a8.06,8.06,0,0,1-8-8V202l30,18H230.75l30-18v42.12A8.06,8.06,0,0,1,252.66,252.19Z"/></svg>
</span>
            <span class="menu-item__badge"></span>
          </div>
          <div class="menu-item__text">
            Inbox
          </div>
        </a>
      </li>
        <li class="menu-item ic-app-header__menu-list-item" >
          <a id="global_nav_history_link" role="button" href="#" class="ic-app-header__menu-list-link">
            <div class="menu-item-icon-container" aria-hidden="true">
              <svg viewBox="0 0 1920 1920" class="ic-icon-svg menu-item__icon svg-icon-history" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M960 112.941c-467.125 0-847.059 379.934-847.059 847.059 0 467.125 379.934 847.059 847.059 847.059 467.125 0 847.059-379.934 847.059-847.059 0-467.125-379.934-847.059-847.059-847.059M960 1920C430.645 1920 0 1489.355 0 960S430.645 0 960 0s960 430.645 960 960-430.645 960-960 960m417.905-575.955L903.552 988.28V395.34h112.941v536.47l429.177 321.77-67.765 90.465z" stroke="none" stroke-width="1" fill-rule="evenodd"/>
</svg>
            </div>
            <div class="menu-item__text">
              History
            </div>
          </a>
        </li>
        

      <li class="ic-app-header__menu-list-item">
        <a id="global_nav_help_link" role="button" class="ic-app-header__menu-list-link" data-track-category="help system" data-track-label="help button" href="https://help.instructure.com">
          <div class="menu-item-icon-container" role="presentation">
              <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg menu-item__icon svg-icon-help" version="1.1" x="0" y="0" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve" fill="currentColor"><path d="M100,127.88A11.15,11.15,0,1,0,111.16,139,11.16,11.16,0,0,0,100,127.88Zm8.82-88.08a33.19,33.19,0,0,1,23.5,23.5,33.54,33.54,0,0,1-24,41.23,3.4,3.4,0,0,0-2.74,3.15v9.06H94.42v-9.06a14.57,14.57,0,0,1,11.13-14,22.43,22.43,0,0,0,13.66-10.27,22.73,22.73,0,0,0,2.31-17.37A21.92,21.92,0,0,0,106,50.59a22.67,22.67,0,0,0-19.68,3.88,22.18,22.18,0,0,0-8.65,17.64H66.54a33.25,33.25,0,0,1,13-26.47A33.72,33.72,0,0,1,108.82,39.8ZM100,5.2A94.8,94.8,0,1,0,194.8,100,94.91,94.91,0,0,0,100,5.2m0,178.45A83.65,83.65,0,1,1,183.65,100,83.73,83.73,0,0,1,100,183.65" transform="translate(-5.2 -5.2)"/></svg>

            <span class="menu-item__badge"></span>
          </div>
          <div class="menu-item__text">
            Help
          </div>
</a>      </li>
    </ul>
  </div>
  <div class="ic-app-header__secondary-navigation">
    <ul class="ic-app-header__menu-list">
      <li class="menu-item ic-app-header__menu-list-item">
        <a
          id="primaryNavToggle"
          role="button"
          href="#"
          class="ic-app-header__menu-list-link ic-app-header__menu-list-link--nav-toggle"
          aria-label="Minimize global navigation"
          title="Minimize global navigation"
        >
          <div class="menu-item-icon-container" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="ic-icon-svg ic-icon-svg--navtoggle" version="1.1" x="0" y="0" width="40" height="32" viewBox="0 0 40 32" xml:space="preserve">
  <path d="M39.5,30.28V2.48H37.18v27.8Zm-4.93-13.9L22.17,4,20.53,5.61l9.61,9.61H.5v2.31H30.14l-9.61,9.61,1.64,1.64Z"/>
</svg>

          </div>
        </a>
      </li>
    </ul>
  </div>
  <div id="global_nav_tray_container"></div>
  <div id="global_nav_tour"></div>
</header>


  <div id="instructure_ajax_error_box">
    <div style="text-align: right; background-color: #fff;"><a href="#" class="close_instructure_ajax_error_box_link">Close</a></div>
    <iframe id="instructure_ajax_error_result" src="about:blank" style="border: 0;" title="Error"></iframe>
  </div>

  <div id="wrapper" class="ic-Layout-wrapper">
        <div class="ic-app-nav-toggle-and-crumbs no-print">
            <button type="button" id="courseMenuToggle" class="Button Button--link ic-app-course-nav-toggle" aria-live="polite" aria-label="Hide Courses Navigation Menu">
              <i class="icon-hamburger" aria-hidden="true"></i>
            </button>

          <div class="ic-app-crumbs ">
              <nav id="breadcrumbs" role="navigation" aria-label="breadcrumbs"><ul><li class="home"><a href="/"><span class="ellipsible"><i class="icon-home"
   title="My Dashboard">
  <span class="screenreader-only">My Dashboard</span>
</i>
</span></a></li><li><a href="/courses/42248"><span class="ellipsible">CS-375-001-24-FA</span></a></li><li><a href="/courses/42248/files"><span class="ellipsible">Files</span></a></li><li><a href="/courses/42248/files/4249988"><span class="ellipsible">shapes.js</span></a></li></ul></nav>
          </div>


          <div class="right-of-crumbs">
              <div class="TutorialToggleHolder"></div>
          </div>

        </div>
    <div id="main" class="ic-Layout-columns">
        <div class="ic-Layout-watermark"></div>
        <div id="left-side"
          class="ic-app-course-menu ic-sticky-on list-view"
          style="display: block"
          >
          <div id="sticky-container" class="ic-sticky-frame">
              <span id="section-tabs-header-subtitle" class="ellipsis">Fall 2024</span>
            <nav role="navigation" aria-label="Courses Navigation Menu"><ul id="section-tabs"><li class="section"><a href="/courses/42248" class="home">Home</a></li><li class="section"><a href="/courses/42248/assignments/syllabus" class="syllabus">Syllabus</a></li><li class="section"><a href="/courses/42248/modules" class="modules">Modules</a></li><li class="section"><a href="/courses/42248/files" aria-current="page" class="files active">Files</a></li><li class="section"><a href="/courses/42248/wiki" class="pages">Pages</a></li><li class="section"><a href="/courses/42248/quizzes" class="quizzes">Quizzes</a></li><li class="section"><a href="/courses/42248/assignments" class="assignments">Assignments</a></li><li class="section"><a href="/courses/42248/announcements" class="announcements">Announcements</a></li><li class="section"><a href="/courses/42248/external_tools/824" class="context_external_tool_824">YuJa</a></li><li class="section"><a href="/courses/42248/users" class="people">People</a></li><li class="section"><a href="/courses/42248/grades" class="grades">Grades</a></li><li class="section"><a href="/courses/42248/external_tools/3250" class="context_external_tool_3250">Zoom</a></li></ul></nav>
          </div>
        </div>
      <div id="not_right_side" class="ic-app-main-content">
        <div id="content-wrapper" class="ic-Layout-contentWrapper">
          
          <div id="content" class="ic-Layout-contentMain" role="main">
            
  <h2>shapes.js</h2>
  <div>
    <span style="font-size: 1.2em;">
      <a download="true" href="/courses/42248/files/4249988/download?download_frd=1">Download shapes.js</a>
    </span> (342 Bytes)
  </div>
    <div id="doc_preview" data-canvadoc_session_url="/api/v1/canvadoc_session?blob=%7B%22anonymous_instructor_annotations%22:null,%22enable_annotations%22:null,%22moderated_grading_allow_list%22:null,%22submission_id%22:null,%22user_id%22:117500000000055834,%22attachment_id%22:4249988,%22type%22:%22canvadoc%22%7D&amp;hmac=3bb2df61ed6205f77f8d1e2584d0090b58fa5836" data-attachment_id="4249988" data-mimetype="application/javascript" data-attachment_view_inline_ping_url="https://canvas.sonoma.edu/courses/42248/files/4249988/inline_view" data-attachment_preview_processing="true"></div>

  <div id="sequence_footer" data-course-id="42248" data-asset-id="4249988" data-asset-type="File"></div>


          </div>
        </div>
        <div id="right-side-wrapper" class="ic-app-main-content__secondary">
          <aside id="right-side" role="complementary">
            
          </aside>
        </div>
      </div>
    </div>
  </div>



    <div style="display:none;"><!-- Everything inside of this should always stay hidden -->
        <div id="page_view_id">2f367346-3c2b-4473-82b3-73e55f1f3212</div>
    </div>
  <div id='aria_alerts' class='hide-text affix' role="alert" aria-live="assertive"></div>
  <div id='StudentTray__Container'></div>
    <div class="NewUserTutorialTray__Container"></div>
  <div id="react-router-portals"></div>
  

  <iframe src="https://sso.canvaslms.com/post_message_forwarding?rev=59677caad5-de8233d392aa15f4&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJwYXJlbnRfZG9tYWluIjoiY2FudmFzLnNvbm9tYS5lZHUifQ.w3iyBU4Pn77nCp__L1N78qgL-s7Pd9eGNqxWCrLkQ4gnA1JwW8Qjn2JUNF12cQdb_Scp9n8aazl_CP_ZvFYpog" name="post_message_forwarding" title="post_message_forwarding" id="post_message_forwarding" sandbox="allow-scripts allow-same-origin" style="display:none;"></iframe>



<script>
//<![CDATA[
(window.bundles || (window.bundles = [])).push('inst_fs_service_worker');
//]]>
</script>
  <script src="https://instructure-uploads.s3.amazonaws.com/account_117500000000000001/attachments/3913416/Google%20Ally%202024.js" defer="defer"></script>

</div> <!-- #application -->
</body>
</html>
