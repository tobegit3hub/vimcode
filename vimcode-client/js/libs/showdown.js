




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>showdown/src/showdown.js at master · coreyti/showdown</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="coreyti/showdown" name="twitter:title" /><meta content="JavaScript port of Markdown (from http://attacklab.net/showdown/)" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/4937?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/4937?s=400" property="og:image" /><meta content="coreyti/showdown" property="og:title" /><meta content="https://github.com/coreyti/showdown" property="og:url" /><meta content="JavaScript port of Markdown (from http://attacklab.net/showdown/)" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CA866452:0207:404C05A:534A62B9" name="octolytics-dimension-request_id" /><meta content="2715000" name="octolytics-actor-id" /><meta content="tobegit3hub" name="octolytics-actor-login" /><meta content="29acdfe0579ca42cb6eed81c98beef4c73d70769d52dec074619af989e247a27" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="3NeWddKgDZ3Si6vmyzrFZY/lqrkKmeofveTJaE7CP/c=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-9bb53a970698e77802f98db076a34f260ae63ee3.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-24972a8594e0dd0863bc8eacfe2fb93cec3b854f.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-e74c47b047378bd1da6e54f064c49571a2b70565.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-a1fec3e73d87f3550c635e371c8519308940f4b4.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="d214ff40e069409bc0fb6fc672847713">

        <link data-pjax-transient rel='permalink' href='/coreyti/showdown/blob/2e102c72b26708147817f8f5e4ab1161a38a57a0/src/showdown.js'>

  <meta name="description" content="JavaScript port of Markdown (from http://attacklab.net/showdown/)" />

  <meta content="4937" name="octolytics-dimension-user_id" /><meta content="coreyti" name="octolytics-dimension-user_login" /><meta content="75547" name="octolytics-dimension-repository_id" /><meta content="coreyti/showdown" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="75547" name="octolytics-dimension-repository_network_root_id" /><meta content="coreyti/showdown" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/coreyti/showdown/commits/master.atom" rel="alternate" title="Recent Commits to showdown:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production linux vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="tobegit3hub"
      data-repo="coreyti/showdown"
      data-branch="master"
      data-sha="fb6d444b0f4dc6d23a59cf440513b3a7a64e4803"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="coreyti/showdown" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/tobegit3hub" class="name">
        <img alt="tobe" class=" js-avatar" data-user="2715000" height="20" src="https://avatars2.githubusercontent.com/u/2715000?s=140" width="20" /> tobegit3hub
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="coreyti/showdown">This repository</span>
    </li>
      <li>
        <a href="/coreyti/showdown/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="3NeWddKgDZ3Si6vmyzrFZY/lqrkKmeofveTJaE7CP/c=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="75547" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/coreyti/showdown/watchers">
        103
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container on">
    <a href="/coreyti/showdown/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar coreyti/showdown" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/coreyti/showdown/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star coreyti/showdown" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/coreyti/showdown/stargazers">
        1,823
      </a>
  </div>

  </li>


        <li>
          <a href="/coreyti/showdown/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of coreyti/showdown to your account" aria-label="Fork your own copy of coreyti/showdown to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/coreyti/showdown/network" class="social-count">426</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/coreyti" class="url fn" itemprop="url" rel="author"><span itemprop="title">coreyti</span></a></span><span class="path-divider">/</span><strong><a href="/coreyti/showdown" class="js-current-repository js-repo-home-link">showdown</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/coreyti/showdown" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /coreyti/showdown">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/coreyti/showdown/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /coreyti/showdown/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>55</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/coreyti/showdown/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /coreyti/showdown/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>30</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/coreyti/showdown/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /coreyti/showdown/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/coreyti/showdown/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /coreyti/showdown/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/coreyti/showdown/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /coreyti/showdown/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/coreyti/showdown/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /coreyti/showdown/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/coreyti/showdown.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/coreyti/showdown.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:coreyti/showdown.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:coreyti/showdown.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/coreyti/showdown" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/coreyti/showdown" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/coreyti/showdown/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download coreyti/showdown as a zip file"
                   title="Download coreyti/showdown as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:f96bd31f99a6d197dd73e150a2ed7295 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/coreyti/showdown/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/coreyti/showdown/blob/master/src/showdown.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/coreyti/showdown/tree/v0.3.1/src/showdown.js"
                 data-name="v0.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v0.3.1">v0.3.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/coreyti/showdown" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">showdown</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/coreyti/showdown/tree/master/src" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">src</span></a></span><span class="separator"> / </span><strong class="final-path">showdown.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="src/showdown.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="Pascal Deschênes" class="main-avatar js-avatar" data-user="153048" height="24" src="https://avatars1.githubusercontent.com/u/153048?s=140" width="24" />
    <span class="author"><a href="/pdeschen" rel="author">pdeschen</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2012-11-01T16:12:32-04:00" title="2012-11-01 21:12:32">November 01, 2012</time>
    <div class="commit-title">
        <a href="/coreyti/showdown/commit/0440ef313e2181e901daee24ed05894bb96720d8" class="message" data-pjax="true" title="fix bug with this scope handling and extension converter argument

* `this` scope is captured as `self`, so that it can be properly passed to `Showdown.forEach(plugin(self)` otherwise,
  extension plugin will end up with converter pointing to global scope.
* because Showdown is not using proper prototype chain (i.e. references to yet to be defined functions), I had to
   move the extension handling below makeHtml so that it is defined and available within the plugin itself">fix bug with this scope handling and extension converter argument</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>9</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="tstone" href="/coreyti/showdown/commits/master/src/showdown.js?author=tstone"><img alt="Titus" class=" js-avatar" data-user="90279" height="20" src="https://avatars0.githubusercontent.com/u/90279?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="coreyti" href="/coreyti/showdown/commits/master/src/showdown.js?author=coreyti"><img alt="Corey Innis" class=" js-avatar" data-user="4937" height="20" src="https://avatars1.githubusercontent.com/u/4937?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="langpavel" href="/coreyti/showdown/commits/master/src/showdown.js?author=langpavel"><img alt="Pavel Lang" class=" js-avatar" data-user="142462" height="20" src="https://avatars0.githubusercontent.com/u/142462?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="josephjoaquinmartin" href="/coreyti/showdown/commits/master/src/showdown.js?author=josephjoaquinmartin"><img alt="josephjoaquinmartin" class=" js-avatar" data-user="417616" height="20" src="https://avatars2.githubusercontent.com/u/417616?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="remy" href="/coreyti/showdown/commits/master/src/showdown.js?author=remy"><img alt="Remy Sharp" class=" js-avatar" data-user="13700" height="20" src="https://avatars3.githubusercontent.com/u/13700?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="pdeschen" href="/coreyti/showdown/commits/master/src/showdown.js?author=pdeschen"><img alt="Pascal Deschênes" class=" js-avatar" data-user="153048" height="20" src="https://avatars1.githubusercontent.com/u/153048?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="rogerbraun" href="/coreyti/showdown/commits/master/src/showdown.js?author=rogerbraun"><img alt="Roger Braun" class=" js-avatar" data-user="101936" height="20" src="https://avatars1.githubusercontent.com/u/101936?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="unwiredben" href="/coreyti/showdown/commits/master/src/showdown.js?author=unwiredben"><img alt="Ben Combee" class=" js-avatar" data-user="230363" height="20" src="https://avatars3.githubusercontent.com/u/230363?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="abackstrom" href="/coreyti/showdown/commits/master/src/showdown.js?author=abackstrom"><img alt="Annika Backstrom" class=" js-avatar" data-user="67821" height="20" src="https://avatars2.githubusercontent.com/u/67821?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Titus" class=" js-avatar" data-user="90279" height="24" src="https://avatars0.githubusercontent.com/u/90279?s=140" width="24" />
            <a href="/tstone">tstone</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Corey Innis" class=" js-avatar" data-user="4937" height="24" src="https://avatars1.githubusercontent.com/u/4937?s=140" width="24" />
            <a href="/coreyti">coreyti</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Pavel Lang" class=" js-avatar" data-user="142462" height="24" src="https://avatars0.githubusercontent.com/u/142462?s=140" width="24" />
            <a href="/langpavel">langpavel</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="josephjoaquinmartin" class=" js-avatar" data-user="417616" height="24" src="https://avatars2.githubusercontent.com/u/417616?s=140" width="24" />
            <a href="/josephjoaquinmartin">josephjoaquinmartin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Remy Sharp" class=" js-avatar" data-user="13700" height="24" src="https://avatars3.githubusercontent.com/u/13700?s=140" width="24" />
            <a href="/remy">remy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Pascal Deschênes" class=" js-avatar" data-user="153048" height="24" src="https://avatars1.githubusercontent.com/u/153048?s=140" width="24" />
            <a href="/pdeschen">pdeschen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Roger Braun" class=" js-avatar" data-user="101936" height="24" src="https://avatars1.githubusercontent.com/u/101936?s=140" width="24" />
            <a href="/rogerbraun">rogerbraun</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Ben Combee" class=" js-avatar" data-user="230363" height="24" src="https://avatars3.githubusercontent.com/u/230363?s=140" width="24" />
            <a href="/unwiredben">unwiredben</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Annika Backstrom" class=" js-avatar" data-user="67821" height="24" src="https://avatars2.githubusercontent.com/u/67821?s=140" width="24" />
            <a href="/abackstrom">abackstrom</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>1455 lines (1201 sloc)</span>
          <span class="meta-divider"></span>
        <span>37.933 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped tooltipped-n js-update-url-with-hash"
                   aria-label="Clicking this button will automatically fork this project so you can edit the file"
                   href="/coreyti/showdown/edit/master/src/showdown.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/coreyti/showdown/raw/master/src/showdown.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/coreyti/showdown/blame/master/src/showdown.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/coreyti/showdown/commits/master/src/showdown.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon tooltipped tooltipped-s"
               href="/coreyti/showdown/delete/master/src/showdown.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="c1">//</span></div><div class='line' id='LC2'><span class="c1">// showdown.js -- A javascript port of Markdown.</span></div><div class='line' id='LC3'><span class="c1">//</span></div><div class='line' id='LC4'><span class="c1">// Copyright (c) 2007 John Fraser.</span></div><div class='line' id='LC5'><span class="c1">//</span></div><div class='line' id='LC6'><span class="c1">// Original Markdown Copyright (c) 2004-2005 John Gruber</span></div><div class='line' id='LC7'><span class="c1">//   &lt;http://daringfireball.net/projects/markdown/&gt;</span></div><div class='line' id='LC8'><span class="c1">//</span></div><div class='line' id='LC9'><span class="c1">// Redistributable under a BSD-style open source license.</span></div><div class='line' id='LC10'><span class="c1">// See license.txt for more information.</span></div><div class='line' id='LC11'><span class="c1">//</span></div><div class='line' id='LC12'><span class="c1">// The full source distribution is at:</span></div><div class='line' id='LC13'><span class="c1">//</span></div><div class='line' id='LC14'><span class="c1">//				A A L</span></div><div class='line' id='LC15'><span class="c1">//				T C A</span></div><div class='line' id='LC16'><span class="c1">//				T K B</span></div><div class='line' id='LC17'><span class="c1">//</span></div><div class='line' id='LC18'><span class="c1">//   &lt;http://www.attacklab.net/&gt;</span></div><div class='line' id='LC19'><span class="c1">//</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><span class="c1">//</span></div><div class='line' id='LC22'><span class="c1">// Wherever possible, Showdown is a straight, line-by-line port</span></div><div class='line' id='LC23'><span class="c1">// of the Perl version of Markdown.</span></div><div class='line' id='LC24'><span class="c1">//</span></div><div class='line' id='LC25'><span class="c1">// This is not a normal parser design; it&#39;s basically just a</span></div><div class='line' id='LC26'><span class="c1">// series of string substitutions.  It&#39;s hard to read and</span></div><div class='line' id='LC27'><span class="c1">// maintain this way,  but keeping Showdown close to the original</span></div><div class='line' id='LC28'><span class="c1">// design makes it easier to port new features.</span></div><div class='line' id='LC29'><span class="c1">//</span></div><div class='line' id='LC30'><span class="c1">// More importantly, Showdown behaves like markdown.pl in most</span></div><div class='line' id='LC31'><span class="c1">// edge cases.  So web applications can do client-side preview</span></div><div class='line' id='LC32'><span class="c1">// in Javascript, and then build identical HTML on the server.</span></div><div class='line' id='LC33'><span class="c1">//</span></div><div class='line' id='LC34'><span class="c1">// This port needs the new RegExp functionality of ECMA 262,</span></div><div class='line' id='LC35'><span class="c1">// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers</span></div><div class='line' id='LC36'><span class="c1">// should do fine.  Even with the new regular expression features,</span></div><div class='line' id='LC37'><span class="c1">// We do a lot of work to emulate Perl&#39;s regex functionality.</span></div><div class='line' id='LC38'><span class="c1">// The tricky changes in this file mostly have the &quot;attacklab:&quot;</span></div><div class='line' id='LC39'><span class="c1">// label.  Major or self-explanatory changes don&#39;t.</span></div><div class='line' id='LC40'><span class="c1">//</span></div><div class='line' id='LC41'><span class="c1">// Smart diff tools like Araxis Merge will be able to match up</span></div><div class='line' id='LC42'><span class="c1">// this file with markdown.pl in a useful way.  A little tweaking</span></div><div class='line' id='LC43'><span class="c1">// helps: in a copy of markdown.pl, replace &quot;#&quot; with &quot;//&quot; and</span></div><div class='line' id='LC44'><span class="c1">// replace &quot;$text&quot; with &quot;text&quot;.  Be sure to ignore whitespace</span></div><div class='line' id='LC45'><span class="c1">// and line endings.</span></div><div class='line' id='LC46'><span class="c1">//</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'><span class="c1">//</span></div><div class='line' id='LC50'><span class="c1">// Showdown usage:</span></div><div class='line' id='LC51'><span class="c1">//</span></div><div class='line' id='LC52'><span class="c1">//   var text = &quot;Markdown *rocks*.&quot;;</span></div><div class='line' id='LC53'><span class="c1">//</span></div><div class='line' id='LC54'><span class="c1">//   var converter = new Showdown.converter();</span></div><div class='line' id='LC55'><span class="c1">//   var html = converter.makeHtml(text);</span></div><div class='line' id='LC56'><span class="c1">//</span></div><div class='line' id='LC57'><span class="c1">//   alert(html);</span></div><div class='line' id='LC58'><span class="c1">//</span></div><div class='line' id='LC59'><span class="c1">// Note: move the sample code to the bottom of this</span></div><div class='line' id='LC60'><span class="c1">// file before uncommenting it.</span></div><div class='line' id='LC61'><span class="c1">//</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'><span class="c1">//</span></div><div class='line' id='LC65'><span class="c1">// Showdown namespace</span></div><div class='line' id='LC66'><span class="c1">//</span></div><div class='line' id='LC67'><span class="kd">var</span> <span class="nx">Showdown</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">extensions</span><span class="o">:</span> <span class="p">{}</span> <span class="p">};</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><span class="c1">//</span></div><div class='line' id='LC70'><span class="c1">// forEach</span></div><div class='line' id='LC71'><span class="c1">//</span></div><div class='line' id='LC72'><span class="kd">var</span> <span class="nx">forEach</span> <span class="o">=</span> <span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC73'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC74'>		<span class="nx">obj</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC75'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC76'>		<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC77'>		<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">len</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC78'>			<span class="nx">callback</span><span class="p">(</span><span class="nx">obj</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC79'>		<span class="p">}</span></div><div class='line' id='LC80'>	<span class="p">}</span></div><div class='line' id='LC81'><span class="p">};</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'><span class="c1">//</span></div><div class='line' id='LC84'><span class="c1">// Standard extension naming</span></div><div class='line' id='LC85'><span class="c1">//</span></div><div class='line' id='LC86'><span class="kd">var</span> <span class="nx">stdExtName</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">s</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>	<span class="k">return</span> <span class="nx">s</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[_-]||\s/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC88'><span class="p">};</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'><span class="c1">//</span></div><div class='line' id='LC91'><span class="c1">// converter</span></div><div class='line' id='LC92'><span class="c1">//</span></div><div class='line' id='LC93'><span class="c1">// Wraps all &quot;globals&quot; so that the only thing</span></div><div class='line' id='LC94'><span class="c1">// exposed is makeHtml().</span></div><div class='line' id='LC95'><span class="c1">//</span></div><div class='line' id='LC96'><span class="nx">Showdown</span><span class="p">.</span><span class="nx">converter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">converter_options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'><span class="c1">//</span></div><div class='line' id='LC99'><span class="c1">// Globals:</span></div><div class='line' id='LC100'><span class="c1">//</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><span class="c1">// Global hashes, used by various utility routines</span></div><div class='line' id='LC103'><span class="kd">var</span> <span class="nx">g_urls</span><span class="p">;</span></div><div class='line' id='LC104'><span class="kd">var</span> <span class="nx">g_titles</span><span class="p">;</span></div><div class='line' id='LC105'><span class="kd">var</span> <span class="nx">g_html_blocks</span><span class="p">;</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'><span class="c1">// Used to track when we&#39;re inside an ordered or unordered list</span></div><div class='line' id='LC108'><span class="c1">// (see _ProcessListItems() for details):</span></div><div class='line' id='LC109'><span class="kd">var</span> <span class="nx">g_list_level</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'><span class="c1">// Global extensions</span></div><div class='line' id='LC112'><span class="kd">var</span> <span class="nx">g_lang_extensions</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC113'><span class="kd">var</span> <span class="nx">g_output_modifiers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'><span class="c1">//</span></div><div class='line' id='LC117'><span class="c1">// Automatic Extension Loading (node only):</span></div><div class='line' id='LC118'><span class="c1">//</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefind&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">exports</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">require</span> <span class="o">!==</span> <span class="s1">&#39;undefind&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC121'>	<span class="kd">var</span> <span class="nx">fs</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;fs&#39;</span><span class="p">);</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>	<span class="k">if</span> <span class="p">(</span><span class="nx">fs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>		<span class="c1">// Search extensions folder</span></div><div class='line' id='LC125'>		<span class="kd">var</span> <span class="nx">extensions</span> <span class="o">=</span> <span class="nx">fs</span><span class="p">.</span><span class="nx">readdirSync</span><span class="p">((</span><span class="nx">__dirname</span> <span class="o">||</span> <span class="s1">&#39;.&#39;</span><span class="p">)</span><span class="o">+</span><span class="s1">&#39;/extensions&#39;</span><span class="p">).</span><span class="nx">filter</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">file</span><span class="p">){</span></div><div class='line' id='LC126'>			<span class="k">return</span> <span class="o">~</span><span class="nx">file</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;.js&#39;</span><span class="p">);</span></div><div class='line' id='LC127'>		<span class="p">}).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">file</span><span class="p">){</span></div><div class='line' id='LC128'>			<span class="k">return</span> <span class="nx">file</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\.js$/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC129'>		<span class="p">});</span></div><div class='line' id='LC130'>		<span class="c1">// Load extensions into Showdown namespace</span></div><div class='line' id='LC131'>		<span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">extensions</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ext</span><span class="p">){</span></div><div class='line' id='LC132'>			<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">stdExtName</span><span class="p">(</span><span class="nx">ext</span><span class="p">);</span></div><div class='line' id='LC133'>			<span class="nx">Showdown</span><span class="p">.</span><span class="nx">extensions</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./extensions/&#39;</span> <span class="o">+</span> <span class="nx">ext</span><span class="p">);</span></div><div class='line' id='LC134'>		<span class="p">});</span></div><div class='line' id='LC135'>	<span class="p">}</span></div><div class='line' id='LC136'><span class="p">}</span></div><div class='line' id='LC137'><br/></div><div class='line' id='LC138'><span class="k">this</span><span class="p">.</span><span class="nx">makeHtml</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'><span class="c1">//</span></div><div class='line' id='LC140'><span class="c1">// Main function. The order in which other subs are called here is</span></div><div class='line' id='LC141'><span class="c1">// essential. Link and image substitutions need to happen before</span></div><div class='line' id='LC142'><span class="c1">// _EscapeSpecialCharsWithinTagAttributes(), so that any *&#39;s or _&#39;s in the &lt;a&gt;</span></div><div class='line' id='LC143'><span class="c1">// and &lt;img&gt; tags get encoded.</span></div><div class='line' id='LC144'><span class="c1">//</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>	<span class="c1">// Clear the global hashes. If we don&#39;t clear these, you get conflicts</span></div><div class='line' id='LC147'>	<span class="c1">// from other articles when generating a page which contains more than</span></div><div class='line' id='LC148'>	<span class="c1">// one article (e.g. an index page that shows the N most recent</span></div><div class='line' id='LC149'>	<span class="c1">// articles):</span></div><div class='line' id='LC150'>	<span class="nx">g_urls</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC151'>	<span class="nx">g_titles</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC152'>	<span class="nx">g_html_blocks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>	<span class="c1">// attacklab: Replace ~ with ~T</span></div><div class='line' id='LC155'>	<span class="c1">// This lets us use tilde as an escape char to avoid md5 hashes</span></div><div class='line' id='LC156'>	<span class="c1">// The choice of character is arbitray; anything that isn&#39;t</span></div><div class='line' id='LC157'>	<span class="c1">// magic in Markdown will work.</span></div><div class='line' id='LC158'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~/g</span><span class="p">,</span><span class="s2">&quot;~T&quot;</span><span class="p">);</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>	<span class="c1">// attacklab: Replace $ with ~D</span></div><div class='line' id='LC161'>	<span class="c1">// RegExp interprets $ as a special character</span></div><div class='line' id='LC162'>	<span class="c1">// when it&#39;s in a replacement string</span></div><div class='line' id='LC163'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\$/g</span><span class="p">,</span><span class="s2">&quot;~D&quot;</span><span class="p">);</span></div><div class='line' id='LC164'><br/></div><div class='line' id='LC165'>	<span class="c1">// Standardize line endings</span></div><div class='line' id='LC166'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span> <span class="c1">// DOS to Unix</span></div><div class='line' id='LC167'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\r/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span> <span class="c1">// Mac to Unix</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>	<span class="c1">// Make sure text begins and ends with a couple of newlines:</span></div><div class='line' id='LC170'>	<span class="nx">text</span> <span class="o">=</span> <span class="s2">&quot;\n\n&quot;</span> <span class="o">+</span> <span class="nx">text</span> <span class="o">+</span> <span class="s2">&quot;\n\n&quot;</span><span class="p">;</span></div><div class='line' id='LC171'><br/></div><div class='line' id='LC172'>	<span class="c1">// Convert all tabs to spaces.</span></div><div class='line' id='LC173'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_Detab</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>	<span class="c1">// Strip any lines consisting only of spaces and tabs.</span></div><div class='line' id='LC176'>	<span class="c1">// This makes subsequent regexen easier to write, because we can</span></div><div class='line' id='LC177'>	<span class="c1">// match consecutive blank lines with /\n+/ instead of something</span></div><div class='line' id='LC178'>	<span class="c1">// contorted like /[ \t]*\n+/ .</span></div><div class='line' id='LC179'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]+$/mg</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>	<span class="c1">// Run language extensions</span></div><div class='line' id='LC182'>	<span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">g_lang_extensions</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">){</span></div><div class='line' id='LC183'>		<span class="nx">text</span> <span class="o">=</span> <span class="nx">_ExecuteExtension</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC184'>	<span class="p">});</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>	<span class="c1">// Handle github codeblocks prior to running HashHTML so that</span></div><div class='line' id='LC187'>	<span class="c1">// HTML contained within the codeblock gets escaped propertly</span></div><div class='line' id='LC188'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoGithubCodeBlocks</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>	<span class="c1">// Turn block-level HTML blocks into hash entries</span></div><div class='line' id='LC191'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_HashHTMLBlocks</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC192'><br/></div><div class='line' id='LC193'>	<span class="c1">// Strip link definitions, store in hashes.</span></div><div class='line' id='LC194'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_StripLinkDefinitions</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC195'><br/></div><div class='line' id='LC196'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_RunBlockGamut</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC197'><br/></div><div class='line' id='LC198'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_UnescapeSpecialChars</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>	<span class="c1">// attacklab: Restore dollar signs</span></div><div class='line' id='LC201'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~D/g</span><span class="p">,</span><span class="s2">&quot;$$&quot;</span><span class="p">);</span></div><div class='line' id='LC202'><br/></div><div class='line' id='LC203'>	<span class="c1">// attacklab: Restore tildes</span></div><div class='line' id='LC204'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~T/g</span><span class="p">,</span><span class="s2">&quot;~&quot;</span><span class="p">);</span></div><div class='line' id='LC205'><br/></div><div class='line' id='LC206'>	<span class="c1">// Run output modifiers</span></div><div class='line' id='LC207'>	<span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">g_output_modifiers</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">x</span><span class="p">){</span></div><div class='line' id='LC208'>		<span class="nx">text</span> <span class="o">=</span> <span class="nx">_ExecuteExtension</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC209'>	<span class="p">});</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC212'><span class="p">};</span></div><div class='line' id='LC213'><span class="c1">//</span></div><div class='line' id='LC214'><span class="c1">// Options:</span></div><div class='line' id='LC215'><span class="c1">//</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'><span class="c1">// Parse extensions options into separate arrays</span></div><div class='line' id='LC218'><span class="k">if</span> <span class="p">(</span><span class="nx">converter_options</span> <span class="o">&amp;&amp;</span> <span class="nx">converter_options</span><span class="p">.</span><span class="nx">extensions</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC219'><br/></div><div class='line' id='LC220'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC221'><br/></div><div class='line' id='LC222'>	<span class="c1">// Iterate over each plugin</span></div><div class='line' id='LC223'>	<span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">converter_options</span><span class="p">.</span><span class="nx">extensions</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">plugin</span><span class="p">){</span></div><div class='line' id='LC224'><br/></div><div class='line' id='LC225'>		<span class="c1">// Assume it&#39;s a bundled plugin if a string is given</span></div><div class='line' id='LC226'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">plugin</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC227'>			<span class="nx">plugin</span> <span class="o">=</span> <span class="nx">Showdown</span><span class="p">.</span><span class="nx">extensions</span><span class="p">[</span><span class="nx">stdExtName</span><span class="p">(</span><span class="nx">plugin</span><span class="p">)];</span></div><div class='line' id='LC228'>		<span class="p">}</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>		<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">plugin</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>			<span class="c1">// Iterate over each extension within that plugin</span></div><div class='line' id='LC232'>			<span class="nx">Showdown</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">plugin</span><span class="p">(</span><span class="nx">self</span><span class="p">),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ext</span><span class="p">){</span></div><div class='line' id='LC233'>				<span class="c1">// Sort extensions by type</span></div><div class='line' id='LC234'>				<span class="k">if</span> <span class="p">(</span><span class="nx">ext</span><span class="p">.</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>					<span class="k">if</span> <span class="p">(</span><span class="nx">ext</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;language&#39;</span> <span class="o">||</span> <span class="nx">ext</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;lang&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC236'>						<span class="nx">g_lang_extensions</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">ext</span><span class="p">);</span></div><div class='line' id='LC237'>					<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">ext</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;output&#39;</span> <span class="o">||</span> <span class="nx">ext</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;html&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>						<span class="nx">g_output_modifiers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">ext</span><span class="p">);</span></div><div class='line' id='LC239'>					<span class="p">}</span></div><div class='line' id='LC240'>				<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC241'>					<span class="c1">// Assume language extension</span></div><div class='line' id='LC242'>					<span class="nx">g_output_modifiers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">ext</span><span class="p">);</span></div><div class='line' id='LC243'>				<span class="p">}</span></div><div class='line' id='LC244'>			<span class="p">});</span></div><div class='line' id='LC245'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC246'>			<span class="k">throw</span> <span class="s2">&quot;Extension &#39;&quot;</span> <span class="o">+</span> <span class="nx">plugin</span> <span class="o">+</span> <span class="s2">&quot;&#39; could not be loaded.  It was either not found or is not a valid extension.&quot;</span><span class="p">;</span></div><div class='line' id='LC247'>		<span class="p">}</span></div><div class='line' id='LC248'>	<span class="p">});</span></div><div class='line' id='LC249'><span class="p">}</span></div><div class='line' id='LC250'><br/></div><div class='line' id='LC251'><br/></div><div class='line' id='LC252'><span class="kd">var</span> <span class="nx">_ExecuteExtension</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ext</span><span class="p">,</span> <span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>	<span class="k">if</span> <span class="p">(</span><span class="nx">ext</span><span class="p">.</span><span class="nx">regex</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC254'>		<span class="kd">var</span> <span class="nx">re</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">ext</span><span class="p">.</span><span class="nx">regex</span><span class="p">,</span> <span class="s1">&#39;g&#39;</span><span class="p">);</span></div><div class='line' id='LC255'>		<span class="k">return</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">re</span><span class="p">,</span> <span class="nx">ext</span><span class="p">.</span><span class="nx">replace</span><span class="p">);</span></div><div class='line' id='LC256'>	<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">ext</span><span class="p">.</span><span class="nx">filter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC257'>		<span class="k">return</span> <span class="nx">ext</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC258'>	<span class="p">}</span></div><div class='line' id='LC259'><span class="p">};</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'><span class="kd">var</span> <span class="nx">_StripLinkDefinitions</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC262'><span class="c1">//</span></div><div class='line' id='LC263'><span class="c1">// Strips link definitions from text, stores the URLs and titles in</span></div><div class='line' id='LC264'><span class="c1">// hash references.</span></div><div class='line' id='LC265'><span class="c1">//</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>	<span class="c1">// Link defs are in the form: ^[id]: url &quot;optional title&quot;</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>	<span class="cm">/*</span></div><div class='line' id='LC270'><span class="cm">		var text = text.replace(/</span></div><div class='line' id='LC271'><span class="cm">				^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1</span></div><div class='line' id='LC272'><span class="cm">				  [ \t]*</span></div><div class='line' id='LC273'><span class="cm">				  \n?				// maybe *one* newline</span></div><div class='line' id='LC274'><span class="cm">				  [ \t]*</span></div><div class='line' id='LC275'><span class="cm">				&lt;?(\S+?)&gt;?			// url = $2</span></div><div class='line' id='LC276'><span class="cm">				  [ \t]*</span></div><div class='line' id='LC277'><span class="cm">				  \n?				// maybe one newline</span></div><div class='line' id='LC278'><span class="cm">				  [ \t]*</span></div><div class='line' id='LC279'><span class="cm">				(?:</span></div><div class='line' id='LC280'><span class="cm">				  (\n*)				// any lines skipped = $3 attacklab: lookbehind removed</span></div><div class='line' id='LC281'><span class="cm">				  [&quot;(]</span></div><div class='line' id='LC282'><span class="cm">				  (.+?)				// title = $4</span></div><div class='line' id='LC283'><span class="cm">				  [&quot;)]</span></div><div class='line' id='LC284'><span class="cm">				  [ \t]*</span></div><div class='line' id='LC285'><span class="cm">				)?					// title is optional</span></div><div class='line' id='LC286'><span class="cm">				(?:\n+|$)</span></div><div class='line' id='LC287'><span class="cm">			  /gm,</span></div><div class='line' id='LC288'><span class="cm">			  function(){...});</span></div><div class='line' id='LC289'><span class="cm">	*/</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>	<span class="c1">// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug</span></div><div class='line' id='LC292'>	<span class="nx">text</span> <span class="o">+=</span> <span class="s2">&quot;~0&quot;</span><span class="p">;</span></div><div class='line' id='LC293'><br/></div><div class='line' id='LC294'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*&lt;?(\S+?)&gt;?[ \t]*\n?[ \t]*(?:(\n*)[&quot;(](.+?)[&quot;)][ \t]*)?(?:\n+|(?=~0))/gm</span><span class="p">,</span></div><div class='line' id='LC295'>		<span class="kd">function</span> <span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">,</span><span class="nx">m3</span><span class="p">,</span><span class="nx">m4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC296'>			<span class="nx">m1</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC297'>			<span class="nx">g_urls</span><span class="p">[</span><span class="nx">m1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_EncodeAmpsAndAngles</span><span class="p">(</span><span class="nx">m2</span><span class="p">);</span>  <span class="c1">// Link IDs are case-insensitive</span></div><div class='line' id='LC298'>			<span class="k">if</span> <span class="p">(</span><span class="nx">m3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC299'>				<span class="c1">// Oops, found blank lines, so it&#39;s not a title.</span></div><div class='line' id='LC300'>				<span class="c1">// Put back the parenthetical statement we stole.</span></div><div class='line' id='LC301'>				<span class="k">return</span> <span class="nx">m3</span><span class="o">+</span><span class="nx">m4</span><span class="p">;</span></div><div class='line' id='LC302'>			<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">m4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC303'>				<span class="nx">g_titles</span><span class="p">[</span><span class="nx">m1</span><span class="p">]</span> <span class="o">=</span> <span class="nx">m4</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC304'>			<span class="p">}</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>			<span class="c1">// Completely remove the definition from the text</span></div><div class='line' id='LC307'>			<span class="k">return</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC308'>		<span class="p">}</span></div><div class='line' id='LC309'>	<span class="p">);</span></div><div class='line' id='LC310'><br/></div><div class='line' id='LC311'>	<span class="c1">// attacklab: strip sentinel</span></div><div class='line' id='LC312'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC313'><br/></div><div class='line' id='LC314'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC315'><span class="p">}</span></div><div class='line' id='LC316'><br/></div><div class='line' id='LC317'><br/></div><div class='line' id='LC318'><span class="kd">var</span> <span class="nx">_HashHTMLBlocks</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC319'>	<span class="c1">// attacklab: Double up blank lines to reduce lookaround</span></div><div class='line' id='LC320'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n/g</span><span class="p">,</span><span class="s2">&quot;\n\n&quot;</span><span class="p">);</span></div><div class='line' id='LC321'><br/></div><div class='line' id='LC322'>	<span class="c1">// Hashify HTML blocks:</span></div><div class='line' id='LC323'>	<span class="c1">// We only want to do this for block-level HTML tags, such as headers,</span></div><div class='line' id='LC324'>	<span class="c1">// lists, and tables. That&#39;s because we still want to wrap &lt;p&gt;s around</span></div><div class='line' id='LC325'>	<span class="c1">// &quot;paragraphs&quot; that are wrapped in non-block-level tags, such as anchors,</span></div><div class='line' id='LC326'>	<span class="c1">// phrase emphasis, and spans. The list of tags we&#39;re looking for is</span></div><div class='line' id='LC327'>	<span class="c1">// hard-coded:</span></div><div class='line' id='LC328'>	<span class="kd">var</span> <span class="nx">block_tags_a</span> <span class="o">=</span> <span class="s2">&quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside&quot;</span><span class="p">;</span></div><div class='line' id='LC329'>	<span class="kd">var</span> <span class="nx">block_tags_b</span> <span class="o">=</span> <span class="s2">&quot;p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside&quot;</span><span class="p">;</span></div><div class='line' id='LC330'><br/></div><div class='line' id='LC331'>	<span class="c1">// First, look for nested blocks, e.g.:</span></div><div class='line' id='LC332'>	<span class="c1">//   &lt;div&gt;</span></div><div class='line' id='LC333'>	<span class="c1">//     &lt;div&gt;</span></div><div class='line' id='LC334'>	<span class="c1">//     tags for inner block must be indented.</span></div><div class='line' id='LC335'>	<span class="c1">//     &lt;/div&gt;</span></div><div class='line' id='LC336'>	<span class="c1">//   &lt;/div&gt;</span></div><div class='line' id='LC337'>	<span class="c1">//</span></div><div class='line' id='LC338'>	<span class="c1">// The outermost tags must start at the left margin for this to match, and</span></div><div class='line' id='LC339'>	<span class="c1">// the inner nested divs must be indented.</span></div><div class='line' id='LC340'>	<span class="c1">// We need to do this before the next, more liberal match, because the next</span></div><div class='line' id='LC341'>	<span class="c1">// match will start at the first `&lt;div&gt;` and stop at the first `&lt;/div&gt;`.</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>	<span class="c1">// attacklab: This regex can be expensive when it fails.</span></div><div class='line' id='LC344'>	<span class="cm">/*</span></div><div class='line' id='LC345'><span class="cm">		var text = text.replace(/</span></div><div class='line' id='LC346'><span class="cm">		(						// save in $1</span></div><div class='line' id='LC347'><span class="cm">			^					// start of line  (with /m)</span></div><div class='line' id='LC348'><span class="cm">			&lt;($block_tags_a)	// start tag = $2</span></div><div class='line' id='LC349'><span class="cm">			\b					// word break</span></div><div class='line' id='LC350'><span class="cm">								// attacklab: hack around khtml/pcre bug...</span></div><div class='line' id='LC351'><span class="cm">			[^\r]*?\n			// any number of lines, minimally matching</span></div><div class='line' id='LC352'><span class="cm">			&lt;/\2&gt;				// the matching end tag</span></div><div class='line' id='LC353'><span class="cm">			[ \t]*				// trailing spaces/tabs</span></div><div class='line' id='LC354'><span class="cm">			(?=\n+)				// followed by a newline</span></div><div class='line' id='LC355'><span class="cm">		)						// attacklab: there are sentinel newlines at end of document</span></div><div class='line' id='LC356'><span class="cm">		/gm,function(){...}};</span></div><div class='line' id='LC357'><span class="cm">	*/</span></div><div class='line' id='LC358'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n&lt;\/\2&gt;[ \t]*(?=\n+))/gm</span><span class="p">,</span><span class="nx">hashElement</span><span class="p">);</span></div><div class='line' id='LC359'><br/></div><div class='line' id='LC360'>	<span class="c1">//</span></div><div class='line' id='LC361'>	<span class="c1">// Now match more liberally, simply from `\n&lt;tag&gt;` to `&lt;/tag&gt;\n`</span></div><div class='line' id='LC362'>	<span class="c1">//</span></div><div class='line' id='LC363'><br/></div><div class='line' id='LC364'>	<span class="cm">/*</span></div><div class='line' id='LC365'><span class="cm">		var text = text.replace(/</span></div><div class='line' id='LC366'><span class="cm">		(						// save in $1</span></div><div class='line' id='LC367'><span class="cm">			^					// start of line  (with /m)</span></div><div class='line' id='LC368'><span class="cm">			&lt;($block_tags_b)	// start tag = $2</span></div><div class='line' id='LC369'><span class="cm">			\b					// word break</span></div><div class='line' id='LC370'><span class="cm">								// attacklab: hack around khtml/pcre bug...</span></div><div class='line' id='LC371'><span class="cm">			[^\r]*?				// any number of lines, minimally matching</span></div><div class='line' id='LC372'><span class="cm">			&lt;/\2&gt;				// the matching end tag</span></div><div class='line' id='LC373'><span class="cm">			[ \t]*				// trailing spaces/tabs</span></div><div class='line' id='LC374'><span class="cm">			(?=\n+)				// followed by a newline</span></div><div class='line' id='LC375'><span class="cm">		)						// attacklab: there are sentinel newlines at end of document</span></div><div class='line' id='LC376'><span class="cm">		/gm,function(){...}};</span></div><div class='line' id='LC377'><span class="cm">	*/</span></div><div class='line' id='LC378'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(&lt;(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?&lt;\/\2&gt;[ \t]*(?=\n+)\n)/gm</span><span class="p">,</span><span class="nx">hashElement</span><span class="p">);</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>	<span class="c1">// Special case just for &lt;hr /&gt;. It was easier to make a special case than</span></div><div class='line' id='LC381'>	<span class="c1">// to make the other regex more complicated.</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>	<span class="cm">/*</span></div><div class='line' id='LC384'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC385'><span class="cm">		(						// save in $1</span></div><div class='line' id='LC386'><span class="cm">			\n\n				// Starting after a blank line</span></div><div class='line' id='LC387'><span class="cm">			[ ]{0,3}</span></div><div class='line' id='LC388'><span class="cm">			(&lt;(hr)				// start tag = $2</span></div><div class='line' id='LC389'><span class="cm">			\b					// word break</span></div><div class='line' id='LC390'><span class="cm">			([^&lt;&gt;])*?			//</span></div><div class='line' id='LC391'><span class="cm">			\/?&gt;)				// the matching end tag</span></div><div class='line' id='LC392'><span class="cm">			[ \t]*</span></div><div class='line' id='LC393'><span class="cm">			(?=\n{2,})			// followed by a blank line</span></div><div class='line' id='LC394'><span class="cm">		)</span></div><div class='line' id='LC395'><span class="cm">		/g,hashElement);</span></div><div class='line' id='LC396'><span class="cm">	*/</span></div><div class='line' id='LC397'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n[ ]{0,3}(&lt;(hr)\b([^&lt;&gt;])*?\/?&gt;)[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">hashElement</span><span class="p">);</span></div><div class='line' id='LC398'><br/></div><div class='line' id='LC399'>	<span class="c1">// Special case for standalone HTML comments:</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>	<span class="cm">/*</span></div><div class='line' id='LC402'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC403'><span class="cm">		(						// save in $1</span></div><div class='line' id='LC404'><span class="cm">			\n\n				// Starting after a blank line</span></div><div class='line' id='LC405'><span class="cm">			[ ]{0,3}			// attacklab: g_tab_width - 1</span></div><div class='line' id='LC406'><span class="cm">			&lt;!</span></div><div class='line' id='LC407'><span class="cm">			(--[^\r]*?--\s*)+</span></div><div class='line' id='LC408'><span class="cm">			&gt;</span></div><div class='line' id='LC409'><span class="cm">			[ \t]*</span></div><div class='line' id='LC410'><span class="cm">			(?=\n{2,})			// followed by a blank line</span></div><div class='line' id='LC411'><span class="cm">		)</span></div><div class='line' id='LC412'><span class="cm">		/g,hashElement);</span></div><div class='line' id='LC413'><span class="cm">	*/</span></div><div class='line' id='LC414'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n\n[ ]{0,3}&lt;!(--[^\r]*?--\s*)+&gt;[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">hashElement</span><span class="p">);</span></div><div class='line' id='LC415'><br/></div><div class='line' id='LC416'>	<span class="c1">// PHP and ASP-style processor instructions (&lt;?...?&gt; and &lt;%...%&gt;)</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'>	<span class="cm">/*</span></div><div class='line' id='LC419'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC420'><span class="cm">		(?:</span></div><div class='line' id='LC421'><span class="cm">			\n\n				// Starting after a blank line</span></div><div class='line' id='LC422'><span class="cm">		)</span></div><div class='line' id='LC423'><span class="cm">		(						// save in $1</span></div><div class='line' id='LC424'><span class="cm">			[ ]{0,3}			// attacklab: g_tab_width - 1</span></div><div class='line' id='LC425'><span class="cm">			(?:</span></div><div class='line' id='LC426'><span class="cm">				&lt;([?%])			// $2</span></div><div class='line' id='LC427'><span class="cm">				[^\r]*?</span></div><div class='line' id='LC428'><span class="cm">				\2&gt;</span></div><div class='line' id='LC429'><span class="cm">			)</span></div><div class='line' id='LC430'><span class="cm">			[ \t]*</span></div><div class='line' id='LC431'><span class="cm">			(?=\n{2,})			// followed by a blank line</span></div><div class='line' id='LC432'><span class="cm">		)</span></div><div class='line' id='LC433'><span class="cm">		/g,hashElement);</span></div><div class='line' id='LC434'><span class="cm">	*/</span></div><div class='line' id='LC435'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:\n\n)([ ]{0,3}(?:&lt;([?%])[^\r]*?\2&gt;)[ \t]*(?=\n{2,}))/g</span><span class="p">,</span><span class="nx">hashElement</span><span class="p">);</span></div><div class='line' id='LC436'><br/></div><div class='line' id='LC437'>	<span class="c1">// attacklab: Undo double lines (see comment at top of this function)</span></div><div class='line' id='LC438'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span></div><div class='line' id='LC439'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC440'><span class="p">}</span></div><div class='line' id='LC441'><br/></div><div class='line' id='LC442'><span class="kd">var</span> <span class="nx">hashElement</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC443'>	<span class="kd">var</span> <span class="nx">blockText</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC444'><br/></div><div class='line' id='LC445'>	<span class="c1">// Undo double lines</span></div><div class='line' id='LC446'>	<span class="nx">blockText</span> <span class="o">=</span> <span class="nx">blockText</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n\n/g</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span></div><div class='line' id='LC447'>	<span class="nx">blockText</span> <span class="o">=</span> <span class="nx">blockText</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC448'><br/></div><div class='line' id='LC449'>	<span class="c1">// strip trailing blank lines</span></div><div class='line' id='LC450'>	<span class="nx">blockText</span> <span class="o">=</span> <span class="nx">blockText</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC451'><br/></div><div class='line' id='LC452'>	<span class="c1">// Replace the element text with a marker (&quot;~KxK&quot; where x is its key)</span></div><div class='line' id='LC453'>	<span class="nx">blockText</span> <span class="o">=</span> <span class="s2">&quot;\n\n~K&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">g_html_blocks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">blockText</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;K\n\n&quot;</span><span class="p">;</span></div><div class='line' id='LC454'><br/></div><div class='line' id='LC455'>	<span class="k">return</span> <span class="nx">blockText</span><span class="p">;</span></div><div class='line' id='LC456'><span class="p">};</span></div><div class='line' id='LC457'><br/></div><div class='line' id='LC458'><span class="kd">var</span> <span class="nx">_RunBlockGamut</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC459'><span class="c1">//</span></div><div class='line' id='LC460'><span class="c1">// These are all the transformations that form block-level</span></div><div class='line' id='LC461'><span class="c1">// tags like paragraphs, headers, and list items.</span></div><div class='line' id='LC462'><span class="c1">//</span></div><div class='line' id='LC463'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoHeaders</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>	<span class="c1">// Do Horizontal Rules:</span></div><div class='line' id='LC466'>	<span class="kd">var</span> <span class="nx">key</span> <span class="o">=</span> <span class="nx">hashBlock</span><span class="p">(</span><span class="s2">&quot;&lt;hr /&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC467'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC468'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC469'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm</span><span class="p">,</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoLists</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC472'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoCodeBlocks</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC473'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoBlockQuotes</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC474'><br/></div><div class='line' id='LC475'>	<span class="c1">// We already ran _HashHTMLBlocks() before, in Markdown(), but that</span></div><div class='line' id='LC476'>	<span class="c1">// was to escape raw HTML in the original Markdown source. This time,</span></div><div class='line' id='LC477'>	<span class="c1">// we&#39;re escaping the markup we&#39;ve just created, so that we don&#39;t wrap</span></div><div class='line' id='LC478'>	<span class="c1">// &lt;p&gt; tags around block-level tags.</span></div><div class='line' id='LC479'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_HashHTMLBlocks</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC480'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_FormParagraphs</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC483'><span class="p">};</span></div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'><span class="kd">var</span> <span class="nx">_RunSpanGamut</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC487'><span class="c1">//</span></div><div class='line' id='LC488'><span class="c1">// These are all the transformations that occur *within* block-level</span></div><div class='line' id='LC489'><span class="c1">// tags like paragraphs, headers, and list items.</span></div><div class='line' id='LC490'><span class="c1">//</span></div><div class='line' id='LC491'><br/></div><div class='line' id='LC492'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoCodeSpans</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC493'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_EscapeSpecialCharsWithinTagAttributes</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC494'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_EncodeBackslashEscapes</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>	<span class="c1">// Process anchor and image tags. Images must come first,</span></div><div class='line' id='LC497'>	<span class="c1">// because ![foo][f] looks like an anchor.</span></div><div class='line' id='LC498'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoImages</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC499'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoAnchors</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC500'><br/></div><div class='line' id='LC501'>	<span class="c1">// Make links out of things like `&lt;http://example.com/&gt;`</span></div><div class='line' id='LC502'>	<span class="c1">// Must come after _DoAnchors(), because you can use &lt; and &gt;</span></div><div class='line' id='LC503'>	<span class="c1">// delimiters in inline links like [this](&lt;url&gt;).</span></div><div class='line' id='LC504'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoAutoLinks</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC505'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_EncodeAmpsAndAngles</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC506'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">_DoItalicsAndBold</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>	<span class="c1">// Do hard breaks:</span></div><div class='line' id='LC509'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/  +\n/g</span><span class="p">,</span><span class="s2">&quot; &lt;br /&gt;\n&quot;</span><span class="p">);</span></div><div class='line' id='LC510'><br/></div><div class='line' id='LC511'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC512'><span class="p">}</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'><span class="kd">var</span> <span class="nx">_EscapeSpecialCharsWithinTagAttributes</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC515'><span class="c1">//</span></div><div class='line' id='LC516'><span class="c1">// Within tags -- meaning between &lt; and &gt; -- encode [\ ` * _] so they</span></div><div class='line' id='LC517'><span class="c1">// don&#39;t conflict with their use in Markdown for code, italics and strong.</span></div><div class='line' id='LC518'><span class="c1">//</span></div><div class='line' id='LC519'><br/></div><div class='line' id='LC520'>	<span class="c1">// Build a regex to find HTML tags and comments.  See Friedl&#39;s</span></div><div class='line' id='LC521'>	<span class="c1">// &quot;Mastering Regular Expressions&quot;, 2nd Ed., pp. 200-201.</span></div><div class='line' id='LC522'>	<span class="kd">var</span> <span class="nx">regex</span> <span class="o">=</span> <span class="sr">/(&lt;[a-z\/!$](&quot;[^&quot;]*&quot;|&#39;[^&#39;]*&#39;|[^&#39;&quot;&gt;])*&gt;|&lt;!(--.*?--\s*)+&gt;)/gi</span><span class="p">;</span></div><div class='line' id='LC523'><br/></div><div class='line' id='LC524'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">regex</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC525'>		<span class="kd">var</span> <span class="nx">tag</span> <span class="o">=</span> <span class="nx">wholeMatch</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(.)&lt;\/?code&gt;(?=.)/g</span><span class="p">,</span><span class="s2">&quot;$1`&quot;</span><span class="p">);</span></div><div class='line' id='LC526'>		<span class="nx">tag</span> <span class="o">=</span> <span class="nx">escapeCharacters</span><span class="p">(</span><span class="nx">tag</span><span class="p">,</span><span class="s2">&quot;\\`*_&quot;</span><span class="p">);</span></div><div class='line' id='LC527'>		<span class="k">return</span> <span class="nx">tag</span><span class="p">;</span></div><div class='line' id='LC528'>	<span class="p">});</span></div><div class='line' id='LC529'><br/></div><div class='line' id='LC530'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC531'><span class="p">}</span></div><div class='line' id='LC532'><br/></div><div class='line' id='LC533'><span class="kd">var</span> <span class="nx">_DoAnchors</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC534'><span class="c1">//</span></div><div class='line' id='LC535'><span class="c1">// Turn Markdown link shortcuts into XHTML &lt;a&gt; tags.</span></div><div class='line' id='LC536'><span class="c1">//</span></div><div class='line' id='LC537'>	<span class="c1">//</span></div><div class='line' id='LC538'>	<span class="c1">// First, handle reference-style links: [link text] [id]</span></div><div class='line' id='LC539'>	<span class="c1">//</span></div><div class='line' id='LC540'><br/></div><div class='line' id='LC541'>	<span class="cm">/*</span></div><div class='line' id='LC542'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC543'><span class="cm">		(							// wrap whole match in $1</span></div><div class='line' id='LC544'><span class="cm">			\[</span></div><div class='line' id='LC545'><span class="cm">			(</span></div><div class='line' id='LC546'><span class="cm">				(?:</span></div><div class='line' id='LC547'><span class="cm">					\[[^\]]*\]		// allow brackets nested one level</span></div><div class='line' id='LC548'><span class="cm">					|</span></div><div class='line' id='LC549'><span class="cm">					[^\[]			// or anything else</span></div><div class='line' id='LC550'><span class="cm">				)*</span></div><div class='line' id='LC551'><span class="cm">			)</span></div><div class='line' id='LC552'><span class="cm">			\]</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'><span class="cm">			[ ]?					// one optional space</span></div><div class='line' id='LC555'><span class="cm">			(?:\n[ ]*)?				// one optional newline followed by spaces</span></div><div class='line' id='LC556'><br/></div><div class='line' id='LC557'><span class="cm">			\[</span></div><div class='line' id='LC558'><span class="cm">			(.*?)					// id = $3</span></div><div class='line' id='LC559'><span class="cm">			\]</span></div><div class='line' id='LC560'><span class="cm">		)()()()()					// pad remaining backreferences</span></div><div class='line' id='LC561'><span class="cm">		/g,_DoAnchors_callback);</span></div><div class='line' id='LC562'><span class="cm">	*/</span></div><div class='line' id='LC563'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g</span><span class="p">,</span><span class="nx">writeAnchorTag</span><span class="p">);</span></div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'>	<span class="c1">//</span></div><div class='line' id='LC566'>	<span class="c1">// Next, inline-style links: [link text](url &quot;optional title&quot;)</span></div><div class='line' id='LC567'>	<span class="c1">//</span></div><div class='line' id='LC568'><br/></div><div class='line' id='LC569'>	<span class="cm">/*</span></div><div class='line' id='LC570'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC571'><span class="cm">			(						// wrap whole match in $1</span></div><div class='line' id='LC572'><span class="cm">				\[</span></div><div class='line' id='LC573'><span class="cm">				(</span></div><div class='line' id='LC574'><span class="cm">					(?:</span></div><div class='line' id='LC575'><span class="cm">						\[[^\]]*\]	// allow brackets nested one level</span></div><div class='line' id='LC576'><span class="cm">					|</span></div><div class='line' id='LC577'><span class="cm">					[^\[\]]			// or anything else</span></div><div class='line' id='LC578'><span class="cm">				)</span></div><div class='line' id='LC579'><span class="cm">			)</span></div><div class='line' id='LC580'><span class="cm">			\]</span></div><div class='line' id='LC581'><span class="cm">			\(						// literal paren</span></div><div class='line' id='LC582'><span class="cm">			[ \t]*</span></div><div class='line' id='LC583'><span class="cm">			()						// no id, so leave $3 empty</span></div><div class='line' id='LC584'><span class="cm">			&lt;?(.*?)&gt;?				// href = $4</span></div><div class='line' id='LC585'><span class="cm">			[ \t]*</span></div><div class='line' id='LC586'><span class="cm">			(						// $5</span></div><div class='line' id='LC587'><span class="cm">				([&#39;&quot;])				// quote char = $6</span></div><div class='line' id='LC588'><span class="cm">				(.*?)				// Title = $7</span></div><div class='line' id='LC589'><span class="cm">				\6					// matching quote</span></div><div class='line' id='LC590'><span class="cm">				[ \t]*				// ignore any spaces/tabs between closing quote and )</span></div><div class='line' id='LC591'><span class="cm">			)?						// title is optional</span></div><div class='line' id='LC592'><span class="cm">			\)</span></div><div class='line' id='LC593'><span class="cm">		)</span></div><div class='line' id='LC594'><span class="cm">		/g,writeAnchorTag);</span></div><div class='line' id='LC595'><span class="cm">	*/</span></div><div class='line' id='LC596'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()&lt;?(.*?(?:\(.*?\).*?)?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g</span><span class="p">,</span><span class="nx">writeAnchorTag</span><span class="p">);</span></div><div class='line' id='LC597'><br/></div><div class='line' id='LC598'>	<span class="c1">//</span></div><div class='line' id='LC599'>	<span class="c1">// Last, handle reference-style shortcuts: [link text]</span></div><div class='line' id='LC600'>	<span class="c1">// These must come last in case you&#39;ve also got [link test][1]</span></div><div class='line' id='LC601'>	<span class="c1">// or [link test](/foo)</span></div><div class='line' id='LC602'>	<span class="c1">//</span></div><div class='line' id='LC603'><br/></div><div class='line' id='LC604'>	<span class="cm">/*</span></div><div class='line' id='LC605'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC606'><span class="cm">		(		 					// wrap whole match in $1</span></div><div class='line' id='LC607'><span class="cm">			\[</span></div><div class='line' id='LC608'><span class="cm">			([^\[\]]+)				// link text = $2; can&#39;t contain &#39;[&#39; or &#39;]&#39;</span></div><div class='line' id='LC609'><span class="cm">			\]</span></div><div class='line' id='LC610'><span class="cm">		)()()()()()					// pad rest of backreferences</span></div><div class='line' id='LC611'><span class="cm">		/g, writeAnchorTag);</span></div><div class='line' id='LC612'><span class="cm">	*/</span></div><div class='line' id='LC613'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\[([^\[\]]+)\])()()()()()/g</span><span class="p">,</span> <span class="nx">writeAnchorTag</span><span class="p">);</span></div><div class='line' id='LC614'><br/></div><div class='line' id='LC615'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC616'><span class="p">}</span></div><div class='line' id='LC617'><br/></div><div class='line' id='LC618'><span class="kd">var</span> <span class="nx">writeAnchorTag</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">,</span><span class="nx">m3</span><span class="p">,</span><span class="nx">m4</span><span class="p">,</span><span class="nx">m5</span><span class="p">,</span><span class="nx">m6</span><span class="p">,</span><span class="nx">m7</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC619'>	<span class="k">if</span> <span class="p">(</span><span class="nx">m7</span> <span class="o">==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="nx">m7</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC620'>	<span class="kd">var</span> <span class="nx">whole_match</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC621'>	<span class="kd">var</span> <span class="nx">link_text</span>   <span class="o">=</span> <span class="nx">m2</span><span class="p">;</span></div><div class='line' id='LC622'>	<span class="kd">var</span> <span class="nx">link_id</span>	 <span class="o">=</span> <span class="nx">m3</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC623'>	<span class="kd">var</span> <span class="nx">url</span>		<span class="o">=</span> <span class="nx">m4</span><span class="p">;</span></div><div class='line' id='LC624'>	<span class="kd">var</span> <span class="nx">title</span>	<span class="o">=</span> <span class="nx">m7</span><span class="p">;</span></div><div class='line' id='LC625'><br/></div><div class='line' id='LC626'>	<span class="k">if</span> <span class="p">(</span><span class="nx">url</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC627'>		<span class="k">if</span> <span class="p">(</span><span class="nx">link_id</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC628'>			<span class="c1">// lower-case and turn embedded newlines into spaces</span></div><div class='line' id='LC629'>			<span class="nx">link_id</span> <span class="o">=</span> <span class="nx">link_text</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ ?\n/g</span><span class="p">,</span><span class="s2">&quot; &quot;</span><span class="p">);</span></div><div class='line' id='LC630'>		<span class="p">}</span></div><div class='line' id='LC631'>		<span class="nx">url</span> <span class="o">=</span> <span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">link_id</span><span class="p">;</span></div><div class='line' id='LC632'><br/></div><div class='line' id='LC633'>		<span class="k">if</span> <span class="p">(</span><span class="nx">g_urls</span><span class="p">[</span><span class="nx">link_id</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC634'>			<span class="nx">url</span> <span class="o">=</span> <span class="nx">g_urls</span><span class="p">[</span><span class="nx">link_id</span><span class="p">];</span></div><div class='line' id='LC635'>			<span class="k">if</span> <span class="p">(</span><span class="nx">g_titles</span><span class="p">[</span><span class="nx">link_id</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC636'>				<span class="nx">title</span> <span class="o">=</span> <span class="nx">g_titles</span><span class="p">[</span><span class="nx">link_id</span><span class="p">];</span></div><div class='line' id='LC637'>			<span class="p">}</span></div><div class='line' id='LC638'>		<span class="p">}</span></div><div class='line' id='LC639'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC640'>			<span class="k">if</span> <span class="p">(</span><span class="nx">whole_match</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\(\s*\)$/m</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC641'>				<span class="c1">// Special case for explicit empty url</span></div><div class='line' id='LC642'>				<span class="nx">url</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC643'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC644'>				<span class="k">return</span> <span class="nx">whole_match</span><span class="p">;</span></div><div class='line' id='LC645'>			<span class="p">}</span></div><div class='line' id='LC646'>		<span class="p">}</span></div><div class='line' id='LC647'>	<span class="p">}</span></div><div class='line' id='LC648'><br/></div><div class='line' id='LC649'>	<span class="nx">url</span> <span class="o">=</span> <span class="nx">escapeCharacters</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span></div><div class='line' id='LC650'>	<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="s2">&quot;&lt;a href=\&quot;&quot;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">+</span> <span class="s2">&quot;\&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC651'><br/></div><div class='line' id='LC652'>	<span class="k">if</span> <span class="p">(</span><span class="nx">title</span> <span class="o">!=</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC653'>		<span class="nx">title</span> <span class="o">=</span> <span class="nx">title</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC654'>		<span class="nx">title</span> <span class="o">=</span> <span class="nx">escapeCharacters</span><span class="p">(</span><span class="nx">title</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span></div><div class='line' id='LC655'>		<span class="nx">result</span> <span class="o">+=</span>  <span class="s2">&quot; title=\&quot;&quot;</span> <span class="o">+</span> <span class="nx">title</span> <span class="o">+</span> <span class="s2">&quot;\&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC656'>	<span class="p">}</span></div><div class='line' id='LC657'><br/></div><div class='line' id='LC658'>	<span class="nx">result</span> <span class="o">+=</span> <span class="s2">&quot;&gt;&quot;</span> <span class="o">+</span> <span class="nx">link_text</span> <span class="o">+</span> <span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC659'><br/></div><div class='line' id='LC660'>	<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC661'><span class="p">}</span></div><div class='line' id='LC662'><br/></div><div class='line' id='LC663'><br/></div><div class='line' id='LC664'><span class="kd">var</span> <span class="nx">_DoImages</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC665'><span class="c1">//</span></div><div class='line' id='LC666'><span class="c1">// Turn Markdown image shortcuts into &lt;img&gt; tags.</span></div><div class='line' id='LC667'><span class="c1">//</span></div><div class='line' id='LC668'><br/></div><div class='line' id='LC669'>	<span class="c1">//</span></div><div class='line' id='LC670'>	<span class="c1">// First, handle reference-style labeled images: ![alt text][id]</span></div><div class='line' id='LC671'>	<span class="c1">//</span></div><div class='line' id='LC672'><br/></div><div class='line' id='LC673'>	<span class="cm">/*</span></div><div class='line' id='LC674'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC675'><span class="cm">		(						// wrap whole match in $1</span></div><div class='line' id='LC676'><span class="cm">			!\[</span></div><div class='line' id='LC677'><span class="cm">			(.*?)				// alt text = $2</span></div><div class='line' id='LC678'><span class="cm">			\]</span></div><div class='line' id='LC679'><br/></div><div class='line' id='LC680'><span class="cm">			[ ]?				// one optional space</span></div><div class='line' id='LC681'><span class="cm">			(?:\n[ ]*)?			// one optional newline followed by spaces</span></div><div class='line' id='LC682'><br/></div><div class='line' id='LC683'><span class="cm">			\[</span></div><div class='line' id='LC684'><span class="cm">			(.*?)				// id = $3</span></div><div class='line' id='LC685'><span class="cm">			\]</span></div><div class='line' id='LC686'><span class="cm">		)()()()()				// pad rest of backreferences</span></div><div class='line' id='LC687'><span class="cm">		/g,writeImageTag);</span></div><div class='line' id='LC688'><span class="cm">	*/</span></div><div class='line' id='LC689'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g</span><span class="p">,</span><span class="nx">writeImageTag</span><span class="p">);</span></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>	<span class="c1">//</span></div><div class='line' id='LC692'>	<span class="c1">// Next, handle inline images:  ![alt text](url &quot;optional title&quot;)</span></div><div class='line' id='LC693'>	<span class="c1">// Don&#39;t forget: encode * and _</span></div><div class='line' id='LC694'><br/></div><div class='line' id='LC695'>	<span class="cm">/*</span></div><div class='line' id='LC696'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC697'><span class="cm">		(						// wrap whole match in $1</span></div><div class='line' id='LC698'><span class="cm">			!\[</span></div><div class='line' id='LC699'><span class="cm">			(.*?)				// alt text = $2</span></div><div class='line' id='LC700'><span class="cm">			\]</span></div><div class='line' id='LC701'><span class="cm">			\s?					// One optional whitespace character</span></div><div class='line' id='LC702'><span class="cm">			\(					// literal paren</span></div><div class='line' id='LC703'><span class="cm">			[ \t]*</span></div><div class='line' id='LC704'><span class="cm">			()					// no id, so leave $3 empty</span></div><div class='line' id='LC705'><span class="cm">			&lt;?(\S+?)&gt;?			// src url = $4</span></div><div class='line' id='LC706'><span class="cm">			[ \t]*</span></div><div class='line' id='LC707'><span class="cm">			(					// $5</span></div><div class='line' id='LC708'><span class="cm">				([&#39;&quot;])			// quote char = $6</span></div><div class='line' id='LC709'><span class="cm">				(.*?)			// title = $7</span></div><div class='line' id='LC710'><span class="cm">				\6				// matching quote</span></div><div class='line' id='LC711'><span class="cm">				[ \t]*</span></div><div class='line' id='LC712'><span class="cm">			)?					// title is optional</span></div><div class='line' id='LC713'><span class="cm">		\)</span></div><div class='line' id='LC714'><span class="cm">		)</span></div><div class='line' id='LC715'><span class="cm">		/g,writeImageTag);</span></div><div class='line' id='LC716'><span class="cm">	*/</span></div><div class='line' id='LC717'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(!\[(.*?)\]\s?\([ \t]*()&lt;?(\S+?)&gt;?[ \t]*(([&#39;&quot;])(.*?)\6[ \t]*)?\))/g</span><span class="p">,</span><span class="nx">writeImageTag</span><span class="p">);</span></div><div class='line' id='LC718'><br/></div><div class='line' id='LC719'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC720'><span class="p">}</span></div><div class='line' id='LC721'><br/></div><div class='line' id='LC722'><span class="kd">var</span> <span class="nx">writeImageTag</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">,</span><span class="nx">m3</span><span class="p">,</span><span class="nx">m4</span><span class="p">,</span><span class="nx">m5</span><span class="p">,</span><span class="nx">m6</span><span class="p">,</span><span class="nx">m7</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC723'>	<span class="kd">var</span> <span class="nx">whole_match</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC724'>	<span class="kd">var</span> <span class="nx">alt_text</span>   <span class="o">=</span> <span class="nx">m2</span><span class="p">;</span></div><div class='line' id='LC725'>	<span class="kd">var</span> <span class="nx">link_id</span>	 <span class="o">=</span> <span class="nx">m3</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC726'>	<span class="kd">var</span> <span class="nx">url</span>		<span class="o">=</span> <span class="nx">m4</span><span class="p">;</span></div><div class='line' id='LC727'>	<span class="kd">var</span> <span class="nx">title</span>	<span class="o">=</span> <span class="nx">m7</span><span class="p">;</span></div><div class='line' id='LC728'><br/></div><div class='line' id='LC729'>	<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">title</span><span class="p">)</span> <span class="nx">title</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC730'><br/></div><div class='line' id='LC731'>	<span class="k">if</span> <span class="p">(</span><span class="nx">url</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC732'>		<span class="k">if</span> <span class="p">(</span><span class="nx">link_id</span> <span class="o">==</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC733'>			<span class="c1">// lower-case and turn embedded newlines into spaces</span></div><div class='line' id='LC734'>			<span class="nx">link_id</span> <span class="o">=</span> <span class="nx">alt_text</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/ ?\n/g</span><span class="p">,</span><span class="s2">&quot; &quot;</span><span class="p">);</span></div><div class='line' id='LC735'>		<span class="p">}</span></div><div class='line' id='LC736'>		<span class="nx">url</span> <span class="o">=</span> <span class="s2">&quot;#&quot;</span><span class="o">+</span><span class="nx">link_id</span><span class="p">;</span></div><div class='line' id='LC737'><br/></div><div class='line' id='LC738'>		<span class="k">if</span> <span class="p">(</span><span class="nx">g_urls</span><span class="p">[</span><span class="nx">link_id</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC739'>			<span class="nx">url</span> <span class="o">=</span> <span class="nx">g_urls</span><span class="p">[</span><span class="nx">link_id</span><span class="p">];</span></div><div class='line' id='LC740'>			<span class="k">if</span> <span class="p">(</span><span class="nx">g_titles</span><span class="p">[</span><span class="nx">link_id</span><span class="p">]</span> <span class="o">!=</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC741'>				<span class="nx">title</span> <span class="o">=</span> <span class="nx">g_titles</span><span class="p">[</span><span class="nx">link_id</span><span class="p">];</span></div><div class='line' id='LC742'>			<span class="p">}</span></div><div class='line' id='LC743'>		<span class="p">}</span></div><div class='line' id='LC744'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC745'>			<span class="k">return</span> <span class="nx">whole_match</span><span class="p">;</span></div><div class='line' id='LC746'>		<span class="p">}</span></div><div class='line' id='LC747'>	<span class="p">}</span></div><div class='line' id='LC748'><br/></div><div class='line' id='LC749'>	<span class="nx">alt_text</span> <span class="o">=</span> <span class="nx">alt_text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC750'>	<span class="nx">url</span> <span class="o">=</span> <span class="nx">escapeCharacters</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span></div><div class='line' id='LC751'>	<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="s2">&quot;&lt;img src=\&quot;&quot;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">+</span> <span class="s2">&quot;\&quot; alt=\&quot;&quot;</span> <span class="o">+</span> <span class="nx">alt_text</span> <span class="o">+</span> <span class="s2">&quot;\&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC752'><br/></div><div class='line' id='LC753'>	<span class="c1">// attacklab: Markdown.pl adds empty title attributes to images.</span></div><div class='line' id='LC754'>	<span class="c1">// Replicate this bug.</span></div><div class='line' id='LC755'><br/></div><div class='line' id='LC756'>	<span class="c1">//if (title != &quot;&quot;) {</span></div><div class='line' id='LC757'>		<span class="nx">title</span> <span class="o">=</span> <span class="nx">title</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;/g</span><span class="p">,</span><span class="s2">&quot;&amp;quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC758'>		<span class="nx">title</span> <span class="o">=</span> <span class="nx">escapeCharacters</span><span class="p">(</span><span class="nx">title</span><span class="p">,</span><span class="s2">&quot;*_&quot;</span><span class="p">);</span></div><div class='line' id='LC759'>		<span class="nx">result</span> <span class="o">+=</span>  <span class="s2">&quot; title=\&quot;&quot;</span> <span class="o">+</span> <span class="nx">title</span> <span class="o">+</span> <span class="s2">&quot;\&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC760'>	<span class="c1">//}</span></div><div class='line' id='LC761'><br/></div><div class='line' id='LC762'>	<span class="nx">result</span> <span class="o">+=</span> <span class="s2">&quot; /&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC763'><br/></div><div class='line' id='LC764'>	<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC765'><span class="p">}</span></div><div class='line' id='LC766'><br/></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'><span class="kd">var</span> <span class="nx">_DoHeaders</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC769'><br/></div><div class='line' id='LC770'>	<span class="c1">// Setext-style headers:</span></div><div class='line' id='LC771'>	<span class="c1">//	Header 1</span></div><div class='line' id='LC772'>	<span class="c1">//	========</span></div><div class='line' id='LC773'>	<span class="c1">//</span></div><div class='line' id='LC774'>	<span class="c1">//	Header 2</span></div><div class='line' id='LC775'>	<span class="c1">//	--------</span></div><div class='line' id='LC776'>	<span class="c1">//</span></div><div class='line' id='LC777'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.+)[ \t]*\n=+[ \t]*\n+/gm</span><span class="p">,</span></div><div class='line' id='LC778'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">){</span><span class="k">return</span> <span class="nx">hashBlock</span><span class="p">(</span><span class="s1">&#39;&lt;h1 id=&quot;&#39;</span> <span class="o">+</span> <span class="nx">headerId</span><span class="p">(</span><span class="nx">m1</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">_RunSpanGamut</span><span class="p">(</span><span class="nx">m1</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;&lt;/h1&gt;&quot;</span><span class="p">);});</span></div><div class='line' id='LC779'><br/></div><div class='line' id='LC780'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(.+)[ \t]*\n-+[ \t]*\n+/gm</span><span class="p">,</span></div><div class='line' id='LC781'>		<span class="kd">function</span><span class="p">(</span><span class="nx">matchFound</span><span class="p">,</span><span class="nx">m1</span><span class="p">){</span><span class="k">return</span> <span class="nx">hashBlock</span><span class="p">(</span><span class="s1">&#39;&lt;h2 id=&quot;&#39;</span> <span class="o">+</span> <span class="nx">headerId</span><span class="p">(</span><span class="nx">m1</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">_RunSpanGamut</span><span class="p">(</span><span class="nx">m1</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;&lt;/h2&gt;&quot;</span><span class="p">);});</span></div><div class='line' id='LC782'><br/></div><div class='line' id='LC783'>	<span class="c1">// atx-style headers:</span></div><div class='line' id='LC784'>	<span class="c1">//  # Header 1</span></div><div class='line' id='LC785'>	<span class="c1">//  ## Header 2</span></div><div class='line' id='LC786'>	<span class="c1">//  ## Header 2 with closing hashes ##</span></div><div class='line' id='LC787'>	<span class="c1">//  ...</span></div><div class='line' id='LC788'>	<span class="c1">//  ###### Header 6</span></div><div class='line' id='LC789'>	<span class="c1">//</span></div><div class='line' id='LC790'><br/></div><div class='line' id='LC791'>	<span class="cm">/*</span></div><div class='line' id='LC792'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC793'><span class="cm">			^(\#{1,6})				// $1 = string of #&#39;s</span></div><div class='line' id='LC794'><span class="cm">			[ \t]*</span></div><div class='line' id='LC795'><span class="cm">			(.+?)					// $2 = Header text</span></div><div class='line' id='LC796'><span class="cm">			[ \t]*</span></div><div class='line' id='LC797'><span class="cm">			\#*						// optional closing #&#39;s (not counted)</span></div><div class='line' id='LC798'><span class="cm">			\n+</span></div><div class='line' id='LC799'><span class="cm">		/gm, function() {...});</span></div><div class='line' id='LC800'><span class="cm">	*/</span></div><div class='line' id='LC801'><br/></div><div class='line' id='LC802'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm</span><span class="p">,</span></div><div class='line' id='LC803'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC804'>			<span class="kd">var</span> <span class="nx">h_level</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC805'>			<span class="k">return</span> <span class="nx">hashBlock</span><span class="p">(</span><span class="s2">&quot;&lt;h&quot;</span> <span class="o">+</span> <span class="nx">h_level</span> <span class="o">+</span> <span class="s1">&#39; id=&quot;&#39;</span> <span class="o">+</span> <span class="nx">headerId</span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="nx">_RunSpanGamut</span><span class="p">(</span><span class="nx">m2</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;&lt;/h&quot;</span> <span class="o">+</span> <span class="nx">h_level</span> <span class="o">+</span> <span class="s2">&quot;&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC806'>		<span class="p">});</span></div><div class='line' id='LC807'><br/></div><div class='line' id='LC808'>	<span class="kd">function</span> <span class="nx">headerId</span><span class="p">(</span><span class="nx">m</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC809'>		<span class="k">return</span> <span class="nx">m</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[^\w]/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">toLowerCase</span><span class="p">();</span></div><div class='line' id='LC810'>	<span class="p">}</span></div><div class='line' id='LC811'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC812'><span class="p">}</span></div><div class='line' id='LC813'><br/></div><div class='line' id='LC814'><span class="c1">// This declaration keeps Dojo compressor from outputting garbage:</span></div><div class='line' id='LC815'><span class="kd">var</span> <span class="nx">_ProcessListItems</span><span class="p">;</span></div><div class='line' id='LC816'><br/></div><div class='line' id='LC817'><span class="kd">var</span> <span class="nx">_DoLists</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC818'><span class="c1">//</span></div><div class='line' id='LC819'><span class="c1">// Form HTML ordered (numbered) and unordered (bulleted) lists.</span></div><div class='line' id='LC820'><span class="c1">//</span></div><div class='line' id='LC821'><br/></div><div class='line' id='LC822'>	<span class="c1">// attacklab: add sentinel to hack around khtml/safari bug:</span></div><div class='line' id='LC823'>	<span class="c1">// http://bugs.webkit.org/show_bug.cgi?id=11231</span></div><div class='line' id='LC824'>	<span class="nx">text</span> <span class="o">+=</span> <span class="s2">&quot;~0&quot;</span><span class="p">;</span></div><div class='line' id='LC825'><br/></div><div class='line' id='LC826'>	<span class="c1">// Re-usable pattern to match any entirel ul or ol list:</span></div><div class='line' id='LC827'><br/></div><div class='line' id='LC828'>	<span class="cm">/*</span></div><div class='line' id='LC829'><span class="cm">		var whole_list = /</span></div><div class='line' id='LC830'><span class="cm">		(									// $1 = whole list</span></div><div class='line' id='LC831'><span class="cm">			(								// $2</span></div><div class='line' id='LC832'><span class="cm">				[ ]{0,3}					// attacklab: g_tab_width - 1</span></div><div class='line' id='LC833'><span class="cm">				([*+-]|\d+[.])				// $3 = first list item marker</span></div><div class='line' id='LC834'><span class="cm">				[ \t]+</span></div><div class='line' id='LC835'><span class="cm">			)</span></div><div class='line' id='LC836'><span class="cm">			[^\r]+?</span></div><div class='line' id='LC837'><span class="cm">			(								// $4</span></div><div class='line' id='LC838'><span class="cm">				~0							// sentinel for workaround; should be $</span></div><div class='line' id='LC839'><span class="cm">			|</span></div><div class='line' id='LC840'><span class="cm">				\n{2,}</span></div><div class='line' id='LC841'><span class="cm">				(?=\S)</span></div><div class='line' id='LC842'><span class="cm">				(?!							// Negative lookahead for another list item marker</span></div><div class='line' id='LC843'><span class="cm">					[ \t]*</span></div><div class='line' id='LC844'><span class="cm">					(?:[*+-]|\d+[.])[ \t]+</span></div><div class='line' id='LC845'><span class="cm">				)</span></div><div class='line' id='LC846'><span class="cm">			)</span></div><div class='line' id='LC847'><span class="cm">		)/g</span></div><div class='line' id='LC848'><span class="cm">	*/</span></div><div class='line' id='LC849'>	<span class="kd">var</span> <span class="nx">whole_list</span> <span class="o">=</span> <span class="sr">/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm</span><span class="p">;</span></div><div class='line' id='LC850'><br/></div><div class='line' id='LC851'>	<span class="k">if</span> <span class="p">(</span><span class="nx">g_list_level</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC852'>		<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">whole_list</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC853'>			<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC854'>			<span class="kd">var</span> <span class="nx">list_type</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m2</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/[*+-]/g</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;ul&quot;</span> <span class="o">:</span> <span class="s2">&quot;ol&quot;</span><span class="p">;</span></div><div class='line' id='LC855'><br/></div><div class='line' id='LC856'>			<span class="c1">// Turn double returns into triple returns, so that we can make a</span></div><div class='line' id='LC857'>			<span class="c1">// paragraph for the last item in a list, if necessary:</span></div><div class='line' id='LC858'>			<span class="nx">list</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">,</span><span class="s2">&quot;\n\n\n&quot;</span><span class="p">);;</span></div><div class='line' id='LC859'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">_ProcessListItems</span><span class="p">(</span><span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC860'><br/></div><div class='line' id='LC861'>			<span class="c1">// Trim any trailing whitespace, to put the closing `&lt;/$list_type&gt;`</span></div><div class='line' id='LC862'>			<span class="c1">// up on the preceding line, to get it past the current stupid</span></div><div class='line' id='LC863'>			<span class="c1">// HTML block parser. This is a hack to work around the terrible</span></div><div class='line' id='LC864'>			<span class="c1">// hack that is the HTML block parser.</span></div><div class='line' id='LC865'>			<span class="nx">result</span> <span class="o">=</span> <span class="nx">result</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC866'>			<span class="nx">result</span> <span class="o">=</span> <span class="s2">&quot;&lt;&quot;</span><span class="o">+</span><span class="nx">list_type</span><span class="o">+</span><span class="s2">&quot;&gt;&quot;</span> <span class="o">+</span> <span class="nx">result</span> <span class="o">+</span> <span class="s2">&quot;&lt;/&quot;</span><span class="o">+</span><span class="nx">list_type</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="p">;</span></div><div class='line' id='LC867'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC868'>		<span class="p">});</span></div><div class='line' id='LC869'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC870'>		<span class="nx">whole_list</span> <span class="o">=</span> <span class="sr">/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g</span><span class="p">;</span></div><div class='line' id='LC871'>		<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">whole_list</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">,</span><span class="nx">m3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC872'>			<span class="kd">var</span> <span class="nx">runup</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC873'>			<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">;</span></div><div class='line' id='LC874'><br/></div><div class='line' id='LC875'>			<span class="kd">var</span> <span class="nx">list_type</span> <span class="o">=</span> <span class="p">(</span><span class="nx">m3</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/[*+-]/g</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">)</span> <span class="o">?</span> <span class="s2">&quot;ul&quot;</span> <span class="o">:</span> <span class="s2">&quot;ol&quot;</span><span class="p">;</span></div><div class='line' id='LC876'>			<span class="c1">// Turn double returns into triple returns, so that we can make a</span></div><div class='line' id='LC877'>			<span class="c1">// paragraph for the last item in a list, if necessary:</span></div><div class='line' id='LC878'>			<span class="kd">var</span> <span class="nx">list</span> <span class="o">=</span> <span class="nx">list</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">,</span><span class="s2">&quot;\n\n\n&quot;</span><span class="p">);;</span></div><div class='line' id='LC879'>			<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">_ProcessListItems</span><span class="p">(</span><span class="nx">list</span><span class="p">);</span></div><div class='line' id='LC880'>			<span class="nx">result</span> <span class="o">=</span> <span class="nx">runup</span> <span class="o">+</span> <span class="s2">&quot;&lt;&quot;</span><span class="o">+</span><span class="nx">list_type</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span> <span class="o">+</span> <span class="nx">result</span> <span class="o">+</span> <span class="s2">&quot;&lt;/&quot;</span><span class="o">+</span><span class="nx">list_type</span><span class="o">+</span><span class="s2">&quot;&gt;\n&quot;</span><span class="p">;</span></div><div class='line' id='LC881'>			<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC882'>		<span class="p">});</span></div><div class='line' id='LC883'>	<span class="p">}</span></div><div class='line' id='LC884'><br/></div><div class='line' id='LC885'>	<span class="c1">// attacklab: strip sentinel</span></div><div class='line' id='LC886'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC887'><br/></div><div class='line' id='LC888'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC889'><span class="p">}</span></div><div class='line' id='LC890'><br/></div><div class='line' id='LC891'><span class="nx">_ProcessListItems</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">list_str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC892'><span class="c1">//</span></div><div class='line' id='LC893'><span class="c1">//  Process the contents of a single ordered or unordered list, splitting it</span></div><div class='line' id='LC894'><span class="c1">//  into individual list items.</span></div><div class='line' id='LC895'><span class="c1">//</span></div><div class='line' id='LC896'>	<span class="c1">// The $g_list_level global keeps track of when we&#39;re inside a list.</span></div><div class='line' id='LC897'>	<span class="c1">// Each time we enter a list, we increment it; when we leave a list,</span></div><div class='line' id='LC898'>	<span class="c1">// we decrement. If it&#39;s zero, we&#39;re not in a list anymore.</span></div><div class='line' id='LC899'>	<span class="c1">//</span></div><div class='line' id='LC900'>	<span class="c1">// We do this because when we&#39;re not inside a list, we want to treat</span></div><div class='line' id='LC901'>	<span class="c1">// something like this:</span></div><div class='line' id='LC902'>	<span class="c1">//</span></div><div class='line' id='LC903'>	<span class="c1">//    I recommend upgrading to version</span></div><div class='line' id='LC904'>	<span class="c1">//    8. Oops, now this line is treated</span></div><div class='line' id='LC905'>	<span class="c1">//    as a sub-list.</span></div><div class='line' id='LC906'>	<span class="c1">//</span></div><div class='line' id='LC907'>	<span class="c1">// As a single paragraph, despite the fact that the second line starts</span></div><div class='line' id='LC908'>	<span class="c1">// with a digit-period-space sequence.</span></div><div class='line' id='LC909'>	<span class="c1">//</span></div><div class='line' id='LC910'>	<span class="c1">// Whereas when we&#39;re inside a list (or sub-list), that line will be</span></div><div class='line' id='LC911'>	<span class="c1">// treated as the start of a sub-list. What a kludge, huh? This is</span></div><div class='line' id='LC912'>	<span class="c1">// an aspect of Markdown&#39;s syntax that&#39;s hard to parse perfectly</span></div><div class='line' id='LC913'>	<span class="c1">// without resorting to mind-reading. Perhaps the solution is to</span></div><div class='line' id='LC914'>	<span class="c1">// change the syntax rules such that sub-lists must start with a</span></div><div class='line' id='LC915'>	<span class="c1">// starting cardinal number; e.g. &quot;1.&quot; or &quot;a.&quot;.</span></div><div class='line' id='LC916'><br/></div><div class='line' id='LC917'>	<span class="nx">g_list_level</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC918'><br/></div><div class='line' id='LC919'>	<span class="c1">// trim trailing blank lines:</span></div><div class='line' id='LC920'>	<span class="nx">list_str</span> <span class="o">=</span> <span class="nx">list_str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n{2,}$/</span><span class="p">,</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span></div><div class='line' id='LC921'><br/></div><div class='line' id='LC922'>	<span class="c1">// attacklab: add sentinel to emulate \z</span></div><div class='line' id='LC923'>	<span class="nx">list_str</span> <span class="o">+=</span> <span class="s2">&quot;~0&quot;</span><span class="p">;</span></div><div class='line' id='LC924'><br/></div><div class='line' id='LC925'>	<span class="cm">/*</span></div><div class='line' id='LC926'><span class="cm">		list_str = list_str.replace(/</span></div><div class='line' id='LC927'><span class="cm">			(\n)?							// leading line = $1</span></div><div class='line' id='LC928'><span class="cm">			(^[ \t]*)						// leading whitespace = $2</span></div><div class='line' id='LC929'><span class="cm">			([*+-]|\d+[.]) [ \t]+			// list marker = $3</span></div><div class='line' id='LC930'><span class="cm">			([^\r]+?						// list item text   = $4</span></div><div class='line' id='LC931'><span class="cm">			(\n{1,2}))</span></div><div class='line' id='LC932'><span class="cm">			(?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))</span></div><div class='line' id='LC933'><span class="cm">		/gm, function(){...});</span></div><div class='line' id='LC934'><span class="cm">	*/</span></div><div class='line' id='LC935'>	<span class="nx">list_str</span> <span class="o">=</span> <span class="nx">list_str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm</span><span class="p">,</span></div><div class='line' id='LC936'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">,</span><span class="nx">m3</span><span class="p">,</span><span class="nx">m4</span><span class="p">){</span></div><div class='line' id='LC937'>			<span class="kd">var</span> <span class="nx">item</span> <span class="o">=</span> <span class="nx">m4</span><span class="p">;</span></div><div class='line' id='LC938'>			<span class="kd">var</span> <span class="nx">leading_line</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC939'>			<span class="kd">var</span> <span class="nx">leading_space</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">;</span></div><div class='line' id='LC940'><br/></div><div class='line' id='LC941'>			<span class="k">if</span> <span class="p">(</span><span class="nx">leading_line</span> <span class="o">||</span> <span class="p">(</span><span class="nx">item</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\n{2,}/</span><span class="p">)</span><span class="o">&gt;-</span><span class="mi">1</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC942'>				<span class="nx">item</span> <span class="o">=</span> <span class="nx">_RunBlockGamut</span><span class="p">(</span><span class="nx">_Outdent</span><span class="p">(</span><span class="nx">item</span><span class="p">));</span></div><div class='line' id='LC943'>			<span class="p">}</span></div><div class='line' id='LC944'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC945'>				<span class="c1">// Recursion for sub-lists:</span></div><div class='line' id='LC946'>				<span class="nx">item</span> <span class="o">=</span> <span class="nx">_DoLists</span><span class="p">(</span><span class="nx">_Outdent</span><span class="p">(</span><span class="nx">item</span><span class="p">));</span></div><div class='line' id='LC947'>				<span class="nx">item</span> <span class="o">=</span> <span class="nx">item</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n$/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="c1">// chomp(item)</span></div><div class='line' id='LC948'>				<span class="nx">item</span> <span class="o">=</span> <span class="nx">_RunSpanGamut</span><span class="p">(</span><span class="nx">item</span><span class="p">);</span></div><div class='line' id='LC949'>			<span class="p">}</span></div><div class='line' id='LC950'><br/></div><div class='line' id='LC951'>			<span class="k">return</span>  <span class="s2">&quot;&lt;li&gt;&quot;</span> <span class="o">+</span> <span class="nx">item</span> <span class="o">+</span> <span class="s2">&quot;&lt;/li&gt;\n&quot;</span><span class="p">;</span></div><div class='line' id='LC952'>		<span class="p">}</span></div><div class='line' id='LC953'>	<span class="p">);</span></div><div class='line' id='LC954'><br/></div><div class='line' id='LC955'>	<span class="c1">// attacklab: strip sentinel</span></div><div class='line' id='LC956'>	<span class="nx">list_str</span> <span class="o">=</span> <span class="nx">list_str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC957'><br/></div><div class='line' id='LC958'>	<span class="nx">g_list_level</span><span class="o">--</span><span class="p">;</span></div><div class='line' id='LC959'>	<span class="k">return</span> <span class="nx">list_str</span><span class="p">;</span></div><div class='line' id='LC960'><span class="p">}</span></div><div class='line' id='LC961'><br/></div><div class='line' id='LC962'><br/></div><div class='line' id='LC963'><span class="kd">var</span> <span class="nx">_DoCodeBlocks</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC964'><span class="c1">//</span></div><div class='line' id='LC965'><span class="c1">//  Process Markdown `&lt;pre&gt;&lt;code&gt;` blocks.</span></div><div class='line' id='LC966'><span class="c1">//</span></div><div class='line' id='LC967'><br/></div><div class='line' id='LC968'>	<span class="cm">/*</span></div><div class='line' id='LC969'><span class="cm">		text = text.replace(text,</span></div><div class='line' id='LC970'><span class="cm">			/(?:\n\n|^)</span></div><div class='line' id='LC971'><span class="cm">			(								// $1 = the code block -- one or more lines, starting with a space/tab</span></div><div class='line' id='LC972'><span class="cm">				(?:</span></div><div class='line' id='LC973'><span class="cm">					(?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width</span></div><div class='line' id='LC974'><span class="cm">					.*\n+</span></div><div class='line' id='LC975'><span class="cm">				)+</span></div><div class='line' id='LC976'><span class="cm">			)</span></div><div class='line' id='LC977'><span class="cm">			(\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width</span></div><div class='line' id='LC978'><span class="cm">		/g,function(){...});</span></div><div class='line' id='LC979'><span class="cm">	*/</span></div><div class='line' id='LC980'><br/></div><div class='line' id='LC981'>	<span class="c1">// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug</span></div><div class='line' id='LC982'>	<span class="nx">text</span> <span class="o">+=</span> <span class="s2">&quot;~0&quot;</span><span class="p">;</span></div><div class='line' id='LC983'><br/></div><div class='line' id='LC984'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g</span><span class="p">,</span></div><div class='line' id='LC985'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC986'>			<span class="kd">var</span> <span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC987'>			<span class="kd">var</span> <span class="nx">nextChar</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">;</span></div><div class='line' id='LC988'><br/></div><div class='line' id='LC989'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">_EncodeCode</span><span class="p">(</span> <span class="nx">_Outdent</span><span class="p">(</span><span class="nx">codeblock</span><span class="p">));</span></div><div class='line' id='LC990'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">_Detab</span><span class="p">(</span><span class="nx">codeblock</span><span class="p">);</span></div><div class='line' id='LC991'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">codeblock</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="c1">// trim leading newlines</span></div><div class='line' id='LC992'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">codeblock</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="c1">// trim trailing whitespace</span></div><div class='line' id='LC993'><br/></div><div class='line' id='LC994'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="s2">&quot;&lt;pre&gt;&lt;code&gt;&quot;</span> <span class="o">+</span> <span class="nx">codeblock</span> <span class="o">+</span> <span class="s2">&quot;\n&lt;/code&gt;&lt;/pre&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC995'><br/></div><div class='line' id='LC996'>			<span class="k">return</span> <span class="nx">hashBlock</span><span class="p">(</span><span class="nx">codeblock</span><span class="p">)</span> <span class="o">+</span> <span class="nx">nextChar</span><span class="p">;</span></div><div class='line' id='LC997'>		<span class="p">}</span></div><div class='line' id='LC998'>	<span class="p">);</span></div><div class='line' id='LC999'><br/></div><div class='line' id='LC1000'>	<span class="c1">// attacklab: strip sentinel</span></div><div class='line' id='LC1001'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1002'><br/></div><div class='line' id='LC1003'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1004'><span class="p">};</span></div><div class='line' id='LC1005'><br/></div><div class='line' id='LC1006'><span class="kd">var</span> <span class="nx">_DoGithubCodeBlocks</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1007'><span class="c1">//</span></div><div class='line' id='LC1008'><span class="c1">//  Process Github-style code blocks</span></div><div class='line' id='LC1009'><span class="c1">//  Example:</span></div><div class='line' id='LC1010'><span class="c1">//  ```ruby</span></div><div class='line' id='LC1011'><span class="c1">//  def hello_world(x)</span></div><div class='line' id='LC1012'><span class="c1">//    puts &quot;Hello, #{x}&quot;</span></div><div class='line' id='LC1013'><span class="c1">//  end</span></div><div class='line' id='LC1014'><span class="c1">//  ```</span></div><div class='line' id='LC1015'><span class="c1">//</span></div><div class='line' id='LC1016'><br/></div><div class='line' id='LC1017'><br/></div><div class='line' id='LC1018'>	<span class="c1">// attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug</span></div><div class='line' id='LC1019'>	<span class="nx">text</span> <span class="o">+=</span> <span class="s2">&quot;~0&quot;</span><span class="p">;</span></div><div class='line' id='LC1020'><br/></div><div class='line' id='LC1021'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g</span><span class="p">,</span></div><div class='line' id='LC1022'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1023'>			<span class="kd">var</span> <span class="nx">language</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC1024'>			<span class="kd">var</span> <span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">m2</span><span class="p">;</span></div><div class='line' id='LC1025'><br/></div><div class='line' id='LC1026'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">_EncodeCode</span><span class="p">(</span><span class="nx">codeblock</span><span class="p">);</span></div><div class='line' id='LC1027'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">_Detab</span><span class="p">(</span><span class="nx">codeblock</span><span class="p">);</span></div><div class='line' id='LC1028'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">codeblock</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="c1">// trim leading newlines</span></div><div class='line' id='LC1029'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="nx">codeblock</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span> <span class="c1">// trim trailing whitespace</span></div><div class='line' id='LC1030'><br/></div><div class='line' id='LC1031'>			<span class="nx">codeblock</span> <span class="o">=</span> <span class="s2">&quot;&lt;pre&gt;&lt;code&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">language</span> <span class="o">?</span> <span class="s2">&quot; class=\&quot;&quot;</span> <span class="o">+</span> <span class="nx">language</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;&gt;&quot;</span> <span class="o">+</span> <span class="nx">codeblock</span> <span class="o">+</span> <span class="s2">&quot;\n&lt;/code&gt;&lt;/pre&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC1032'><br/></div><div class='line' id='LC1033'>			<span class="k">return</span> <span class="nx">hashBlock</span><span class="p">(</span><span class="nx">codeblock</span><span class="p">);</span></div><div class='line' id='LC1034'>		<span class="p">}</span></div><div class='line' id='LC1035'>	<span class="p">);</span></div><div class='line' id='LC1036'><br/></div><div class='line' id='LC1037'>	<span class="c1">// attacklab: strip sentinel</span></div><div class='line' id='LC1038'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1039'><br/></div><div class='line' id='LC1040'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1041'><span class="p">}</span></div><div class='line' id='LC1042'><br/></div><div class='line' id='LC1043'><span class="kd">var</span> <span class="nx">hashBlock</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1044'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^\n+|\n+$)/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1045'>	<span class="k">return</span> <span class="s2">&quot;\n\n~K&quot;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">g_html_blocks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;K\n\n&quot;</span><span class="p">;</span></div><div class='line' id='LC1046'><span class="p">}</span></div><div class='line' id='LC1047'><br/></div><div class='line' id='LC1048'><span class="kd">var</span> <span class="nx">_DoCodeSpans</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1049'><span class="c1">//</span></div><div class='line' id='LC1050'><span class="c1">//   *  Backtick quotes are used for &lt;code&gt;&lt;/code&gt; spans.</span></div><div class='line' id='LC1051'><span class="c1">//</span></div><div class='line' id='LC1052'><span class="c1">//   *  You can use multiple backticks as the delimiters if you want to</span></div><div class='line' id='LC1053'><span class="c1">//	 include literal backticks in the code span. So, this input:</span></div><div class='line' id='LC1054'><span class="c1">//</span></div><div class='line' id='LC1055'><span class="c1">//		 Just type ``foo `bar` baz`` at the prompt.</span></div><div class='line' id='LC1056'><span class="c1">//</span></div><div class='line' id='LC1057'><span class="c1">//	   Will translate to:</span></div><div class='line' id='LC1058'><span class="c1">//</span></div><div class='line' id='LC1059'><span class="c1">//		 &lt;p&gt;Just type &lt;code&gt;foo `bar` baz&lt;/code&gt; at the prompt.&lt;/p&gt;</span></div><div class='line' id='LC1060'><span class="c1">//</span></div><div class='line' id='LC1061'><span class="c1">//	There&#39;s no arbitrary limit to the number of backticks you</span></div><div class='line' id='LC1062'><span class="c1">//	can use as delimters. If you need three consecutive backticks</span></div><div class='line' id='LC1063'><span class="c1">//	in your code, use four for delimiters, etc.</span></div><div class='line' id='LC1064'><span class="c1">//</span></div><div class='line' id='LC1065'><span class="c1">//  *  You can use spaces to get literal backticks at the edges:</span></div><div class='line' id='LC1066'><span class="c1">//</span></div><div class='line' id='LC1067'><span class="c1">//		 ... type `` `bar` `` ...</span></div><div class='line' id='LC1068'><span class="c1">//</span></div><div class='line' id='LC1069'><span class="c1">//	   Turns to:</span></div><div class='line' id='LC1070'><span class="c1">//</span></div><div class='line' id='LC1071'><span class="c1">//		 ... type &lt;code&gt;`bar`&lt;/code&gt; ...</span></div><div class='line' id='LC1072'><span class="c1">//</span></div><div class='line' id='LC1073'><br/></div><div class='line' id='LC1074'>	<span class="cm">/*</span></div><div class='line' id='LC1075'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC1076'><span class="cm">			(^|[^\\])					// Character before opening ` can&#39;t be a backslash</span></div><div class='line' id='LC1077'><span class="cm">			(`+)						// $2 = Opening run of `</span></div><div class='line' id='LC1078'><span class="cm">			(							// $3 = The code block</span></div><div class='line' id='LC1079'><span class="cm">				[^\r]*?</span></div><div class='line' id='LC1080'><span class="cm">				[^`]					// attacklab: work around lack of lookbehind</span></div><div class='line' id='LC1081'><span class="cm">			)</span></div><div class='line' id='LC1082'><span class="cm">			\2							// Matching closer</span></div><div class='line' id='LC1083'><span class="cm">			(?!`)</span></div><div class='line' id='LC1084'><span class="cm">		/gm, function(){...});</span></div><div class='line' id='LC1085'><span class="cm">	*/</span></div><div class='line' id='LC1086'><br/></div><div class='line' id='LC1087'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm</span><span class="p">,</span></div><div class='line' id='LC1088'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">,</span><span class="nx">m3</span><span class="p">,</span><span class="nx">m4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1089'>			<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">m3</span><span class="p">;</span></div><div class='line' id='LC1090'>			<span class="nx">c</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^([ \t]*)/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span>	<span class="c1">// leading whitespace</span></div><div class='line' id='LC1091'>			<span class="nx">c</span> <span class="o">=</span> <span class="nx">c</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/[ \t]*$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span>	<span class="c1">// trailing whitespace</span></div><div class='line' id='LC1092'>			<span class="nx">c</span> <span class="o">=</span> <span class="nx">_EncodeCode</span><span class="p">(</span><span class="nx">c</span><span class="p">);</span></div><div class='line' id='LC1093'>			<span class="k">return</span> <span class="nx">m1</span><span class="o">+</span><span class="s2">&quot;&lt;code&gt;&quot;</span><span class="o">+</span><span class="nx">c</span><span class="o">+</span><span class="s2">&quot;&lt;/code&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC1094'>		<span class="p">});</span></div><div class='line' id='LC1095'><br/></div><div class='line' id='LC1096'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1097'><span class="p">}</span></div><div class='line' id='LC1098'><br/></div><div class='line' id='LC1099'><span class="kd">var</span> <span class="nx">_EncodeCode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1100'><span class="c1">//</span></div><div class='line' id='LC1101'><span class="c1">// Encode/escape certain characters inside Markdown code runs.</span></div><div class='line' id='LC1102'><span class="c1">// The point is that in code, these characters are literals,</span></div><div class='line' id='LC1103'><span class="c1">// and lose their special Markdown meanings.</span></div><div class='line' id='LC1104'><span class="c1">//</span></div><div class='line' id='LC1105'>	<span class="c1">// Encode all ampersands; HTML entities are not</span></div><div class='line' id='LC1106'>	<span class="c1">// entities within a Markdown code span.</span></div><div class='line' id='LC1107'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span><span class="s2">&quot;&amp;amp;&quot;</span><span class="p">);</span></div><div class='line' id='LC1108'><br/></div><div class='line' id='LC1109'>	<span class="c1">// Do the angle bracket song and dance:</span></div><div class='line' id='LC1110'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;/g</span><span class="p">,</span><span class="s2">&quot;&amp;lt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1111'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&gt;/g</span><span class="p">,</span><span class="s2">&quot;&amp;gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1112'><br/></div><div class='line' id='LC1113'>	<span class="c1">// Now, escape characters that are magic in Markdown:</span></div><div class='line' id='LC1114'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">escapeCharacters</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span><span class="s2">&quot;\*_{}[]\\&quot;</span><span class="p">,</span><span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC1115'><br/></div><div class='line' id='LC1116'><span class="c1">// jj the line above breaks this:</span></div><div class='line' id='LC1117'><span class="c1">//---</span></div><div class='line' id='LC1118'><br/></div><div class='line' id='LC1119'><span class="c1">//* Item</span></div><div class='line' id='LC1120'><br/></div><div class='line' id='LC1121'><span class="c1">//   1. Subitem</span></div><div class='line' id='LC1122'><br/></div><div class='line' id='LC1123'><span class="c1">//            special char: *</span></div><div class='line' id='LC1124'><span class="c1">//---</span></div><div class='line' id='LC1125'><br/></div><div class='line' id='LC1126'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1127'><span class="p">}</span></div><div class='line' id='LC1128'><br/></div><div class='line' id='LC1129'><br/></div><div class='line' id='LC1130'><span class="kd">var</span> <span class="nx">_DoItalicsAndBold</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1131'><br/></div><div class='line' id='LC1132'>	<span class="c1">// &lt;strong&gt; must go first:</span></div><div class='line' id='LC1133'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g</span><span class="p">,</span></div><div class='line' id='LC1134'>		<span class="s2">&quot;&lt;strong&gt;$2&lt;/strong&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1135'><br/></div><div class='line' id='LC1136'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(\*|_)(?=\S)([^\r]*?\S)\1/g</span><span class="p">,</span></div><div class='line' id='LC1137'>		<span class="s2">&quot;&lt;em&gt;$2&lt;/em&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1138'><br/></div><div class='line' id='LC1139'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1140'><span class="p">}</span></div><div class='line' id='LC1141'><br/></div><div class='line' id='LC1142'><br/></div><div class='line' id='LC1143'><span class="kd">var</span> <span class="nx">_DoBlockQuotes</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1144'><br/></div><div class='line' id='LC1145'>	<span class="cm">/*</span></div><div class='line' id='LC1146'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC1147'><span class="cm">		(								// Wrap whole match in $1</span></div><div class='line' id='LC1148'><span class="cm">			(</span></div><div class='line' id='LC1149'><span class="cm">				^[ \t]*&gt;[ \t]?			// &#39;&gt;&#39; at the start of a line</span></div><div class='line' id='LC1150'><span class="cm">				.+\n					// rest of the first line</span></div><div class='line' id='LC1151'><span class="cm">				(.+\n)*					// subsequent consecutive lines</span></div><div class='line' id='LC1152'><span class="cm">				\n*						// blanks</span></div><div class='line' id='LC1153'><span class="cm">			)+</span></div><div class='line' id='LC1154'><span class="cm">		)</span></div><div class='line' id='LC1155'><span class="cm">		/gm, function(){...});</span></div><div class='line' id='LC1156'><span class="cm">	*/</span></div><div class='line' id='LC1157'><br/></div><div class='line' id='LC1158'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/((^[ \t]*&gt;[ \t]?.+\n(.+\n)*\n*)+)/gm</span><span class="p">,</span></div><div class='line' id='LC1159'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1160'>			<span class="kd">var</span> <span class="nx">bq</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC1161'><br/></div><div class='line' id='LC1162'>			<span class="c1">// attacklab: hack around Konqueror 3.5.4 bug:</span></div><div class='line' id='LC1163'>			<span class="c1">// &quot;----------bug&quot;.replace(/^-/g,&quot;&quot;) == &quot;bug&quot;</span></div><div class='line' id='LC1164'><br/></div><div class='line' id='LC1165'>			<span class="nx">bq</span> <span class="o">=</span> <span class="nx">bq</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]*&gt;[ \t]?/gm</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">);</span>	<span class="c1">// trim one level of quoting</span></div><div class='line' id='LC1166'><br/></div><div class='line' id='LC1167'>			<span class="c1">// attacklab: clean up hack</span></div><div class='line' id='LC1168'>			<span class="nx">bq</span> <span class="o">=</span> <span class="nx">bq</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1169'><br/></div><div class='line' id='LC1170'>			<span class="nx">bq</span> <span class="o">=</span> <span class="nx">bq</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^[ \t]+$/gm</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span>		<span class="c1">// trim whitespace-only lines</span></div><div class='line' id='LC1171'>			<span class="nx">bq</span> <span class="o">=</span> <span class="nx">_RunBlockGamut</span><span class="p">(</span><span class="nx">bq</span><span class="p">);</span>				<span class="c1">// recurse</span></div><div class='line' id='LC1172'><br/></div><div class='line' id='LC1173'>			<span class="nx">bq</span> <span class="o">=</span> <span class="nx">bq</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^|\n)/g</span><span class="p">,</span><span class="s2">&quot;$1  &quot;</span><span class="p">);</span></div><div class='line' id='LC1174'>			<span class="c1">// These leading spaces screw with &lt;pre&gt; content, so we need to fix that:</span></div><div class='line' id='LC1175'>			<span class="nx">bq</span> <span class="o">=</span> <span class="nx">bq</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span></div><div class='line' id='LC1176'>					<span class="sr">/(\s*&lt;pre&gt;[^\r]+?&lt;\/pre&gt;)/gm</span><span class="p">,</span></div><div class='line' id='LC1177'>				<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1178'>					<span class="kd">var</span> <span class="nx">pre</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC1179'>					<span class="c1">// attacklab: hack around Konqueror 3.5.4 bug:</span></div><div class='line' id='LC1180'>					<span class="nx">pre</span> <span class="o">=</span> <span class="nx">pre</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^  /mg</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">);</span></div><div class='line' id='LC1181'>					<span class="nx">pre</span> <span class="o">=</span> <span class="nx">pre</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1182'>					<span class="k">return</span> <span class="nx">pre</span><span class="p">;</span></div><div class='line' id='LC1183'>				<span class="p">});</span></div><div class='line' id='LC1184'><br/></div><div class='line' id='LC1185'>			<span class="k">return</span> <span class="nx">hashBlock</span><span class="p">(</span><span class="s2">&quot;&lt;blockquote&gt;\n&quot;</span> <span class="o">+</span> <span class="nx">bq</span> <span class="o">+</span> <span class="s2">&quot;\n&lt;/blockquote&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1186'>		<span class="p">});</span></div><div class='line' id='LC1187'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1188'><span class="p">}</span></div><div class='line' id='LC1189'><br/></div><div class='line' id='LC1190'><br/></div><div class='line' id='LC1191'><span class="kd">var</span> <span class="nx">_FormParagraphs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1192'><span class="c1">//</span></div><div class='line' id='LC1193'><span class="c1">//  Params:</span></div><div class='line' id='LC1194'><span class="c1">//    $text - string to process with html &lt;p&gt; tags</span></div><div class='line' id='LC1195'><span class="c1">//</span></div><div class='line' id='LC1196'><br/></div><div class='line' id='LC1197'>	<span class="c1">// Strip leading and trailing lines:</span></div><div class='line' id='LC1198'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^\n+/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1199'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\n+$/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1200'><br/></div><div class='line' id='LC1201'>	<span class="kd">var</span> <span class="nx">grafs</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="sr">/\n{2,}/g</span><span class="p">);</span></div><div class='line' id='LC1202'>	<span class="kd">var</span> <span class="nx">grafsOut</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1203'><br/></div><div class='line' id='LC1204'>	<span class="c1">//</span></div><div class='line' id='LC1205'>	<span class="c1">// Wrap &lt;p&gt; tags.</span></div><div class='line' id='LC1206'>	<span class="c1">//</span></div><div class='line' id='LC1207'>	<span class="kd">var</span> <span class="nx">end</span> <span class="o">=</span> <span class="nx">grafs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1208'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">end</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1209'>		<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">grafs</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC1210'><br/></div><div class='line' id='LC1211'>		<span class="c1">// if this is an HTML marker, copy it</span></div><div class='line' id='LC1212'>		<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/~K(\d+)K/g</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1213'>			<span class="nx">grafsOut</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC1214'>		<span class="p">}</span></div><div class='line' id='LC1215'>		<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">search</span><span class="p">(</span><span class="sr">/\S/</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1216'>			<span class="nx">str</span> <span class="o">=</span> <span class="nx">_RunSpanGamut</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC1217'>			<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^([ \t]*)/g</span><span class="p">,</span><span class="s2">&quot;&lt;p&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1218'>			<span class="nx">str</span> <span class="o">+=</span> <span class="s2">&quot;&lt;/p&gt;&quot;</span></div><div class='line' id='LC1219'>			<span class="nx">grafsOut</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC1220'>		<span class="p">}</span></div><div class='line' id='LC1221'><br/></div><div class='line' id='LC1222'>	<span class="p">}</span></div><div class='line' id='LC1223'><br/></div><div class='line' id='LC1224'>	<span class="c1">//</span></div><div class='line' id='LC1225'>	<span class="c1">// Unhashify HTML blocks</span></div><div class='line' id='LC1226'>	<span class="c1">//</span></div><div class='line' id='LC1227'>	<span class="nx">end</span> <span class="o">=</span> <span class="nx">grafsOut</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1228'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">end</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1229'>		<span class="c1">// if this is a marker for an html block...</span></div><div class='line' id='LC1230'>		<span class="k">while</span> <span class="p">(</span><span class="nx">grafsOut</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">search</span><span class="p">(</span><span class="sr">/~K(\d+)K/</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1231'>			<span class="kd">var</span> <span class="nx">blockText</span> <span class="o">=</span> <span class="nx">g_html_blocks</span><span class="p">[</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">];</span></div><div class='line' id='LC1232'>			<span class="nx">blockText</span> <span class="o">=</span> <span class="nx">blockText</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\$/g</span><span class="p">,</span><span class="s2">&quot;$$$$&quot;</span><span class="p">);</span> <span class="c1">// Escape any dollar signs</span></div><div class='line' id='LC1233'>			<span class="nx">grafsOut</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">grafsOut</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~K\d+K/</span><span class="p">,</span><span class="nx">blockText</span><span class="p">);</span></div><div class='line' id='LC1234'>		<span class="p">}</span></div><div class='line' id='LC1235'>	<span class="p">}</span></div><div class='line' id='LC1236'><br/></div><div class='line' id='LC1237'>	<span class="k">return</span> <span class="nx">grafsOut</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;\n\n&quot;</span><span class="p">);</span></div><div class='line' id='LC1238'><span class="p">}</span></div><div class='line' id='LC1239'><br/></div><div class='line' id='LC1240'><br/></div><div class='line' id='LC1241'><span class="kd">var</span> <span class="nx">_EncodeAmpsAndAngles</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1242'><span class="c1">// Smart processing for ampersands and angle brackets that need to be encoded.</span></div><div class='line' id='LC1243'><br/></div><div class='line' id='LC1244'>	<span class="c1">// Ampersand-encoding based entirely on Nat Irons&#39;s Amputator MT plugin:</span></div><div class='line' id='LC1245'>	<span class="c1">//   http://bumppo.net/projects/amputator/</span></div><div class='line' id='LC1246'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g</span><span class="p">,</span><span class="s2">&quot;&amp;amp;&quot;</span><span class="p">);</span></div><div class='line' id='LC1247'><br/></div><div class='line' id='LC1248'>	<span class="c1">// Encode naked &lt;&#39;s</span></div><div class='line' id='LC1249'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;(?![a-z\/?\$!])/gi</span><span class="p">,</span><span class="s2">&quot;&amp;lt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1250'><br/></div><div class='line' id='LC1251'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1252'><span class="p">}</span></div><div class='line' id='LC1253'><br/></div><div class='line' id='LC1254'><br/></div><div class='line' id='LC1255'><span class="kd">var</span> <span class="nx">_EncodeBackslashEscapes</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1256'><span class="c1">//</span></div><div class='line' id='LC1257'><span class="c1">//   Parameter:  String.</span></div><div class='line' id='LC1258'><span class="c1">//   Returns:	The string, with after processing the following backslash</span></div><div class='line' id='LC1259'><span class="c1">//			   escape sequences.</span></div><div class='line' id='LC1260'><span class="c1">//</span></div><div class='line' id='LC1261'><br/></div><div class='line' id='LC1262'>	<span class="c1">// attacklab: The polite way to do this is with the new</span></div><div class='line' id='LC1263'>	<span class="c1">// escapeCharacters() function:</span></div><div class='line' id='LC1264'>	<span class="c1">//</span></div><div class='line' id='LC1265'>	<span class="c1">// 	text = escapeCharacters(text,&quot;\\&quot;,true);</span></div><div class='line' id='LC1266'>	<span class="c1">// 	text = escapeCharacters(text,&quot;`*_{}[]()&gt;#+-.!&quot;,true);</span></div><div class='line' id='LC1267'>	<span class="c1">//</span></div><div class='line' id='LC1268'>	<span class="c1">// ...but we&#39;re sidestepping its use of the (slow) RegExp constructor</span></div><div class='line' id='LC1269'>	<span class="c1">// as an optimization for Firefox.  This function gets called a LOT.</span></div><div class='line' id='LC1270'><br/></div><div class='line' id='LC1271'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\(\\)/g</span><span class="p">,</span><span class="nx">escapeCharacters_callback</span><span class="p">);</span></div><div class='line' id='LC1272'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\([`*_{}\[\]()&gt;#+-.!])/g</span><span class="p">,</span><span class="nx">escapeCharacters_callback</span><span class="p">);</span></div><div class='line' id='LC1273'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1274'><span class="p">}</span></div><div class='line' id='LC1275'><br/></div><div class='line' id='LC1276'><br/></div><div class='line' id='LC1277'><span class="kd">var</span> <span class="nx">_DoAutoLinks</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1278'><br/></div><div class='line' id='LC1279'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;((https?|ftp|dict):[^&#39;&quot;&gt;\s]+)&gt;/gi</span><span class="p">,</span><span class="s2">&quot;&lt;a href=\&quot;$1\&quot;&gt;$1&lt;/a&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC1280'><br/></div><div class='line' id='LC1281'>	<span class="c1">// Email addresses: &lt;address@domain.foo&gt;</span></div><div class='line' id='LC1282'><br/></div><div class='line' id='LC1283'>	<span class="cm">/*</span></div><div class='line' id='LC1284'><span class="cm">		text = text.replace(/</span></div><div class='line' id='LC1285'><span class="cm">			&lt;</span></div><div class='line' id='LC1286'><span class="cm">			(?:mailto:)?</span></div><div class='line' id='LC1287'><span class="cm">			(</span></div><div class='line' id='LC1288'><span class="cm">				[-.\w]+</span></div><div class='line' id='LC1289'><span class="cm">				\@</span></div><div class='line' id='LC1290'><span class="cm">				[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+</span></div><div class='line' id='LC1291'><span class="cm">			)</span></div><div class='line' id='LC1292'><span class="cm">			&gt;</span></div><div class='line' id='LC1293'><span class="cm">		/gi, _DoAutoLinks_callback());</span></div><div class='line' id='LC1294'><span class="cm">	*/</span></div><div class='line' id='LC1295'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)&gt;/gi</span><span class="p">,</span></div><div class='line' id='LC1296'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1297'>			<span class="k">return</span> <span class="nx">_EncodeEmailAddress</span><span class="p">(</span> <span class="nx">_UnescapeSpecialChars</span><span class="p">(</span><span class="nx">m1</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC1298'>		<span class="p">}</span></div><div class='line' id='LC1299'>	<span class="p">);</span></div><div class='line' id='LC1300'><br/></div><div class='line' id='LC1301'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1302'><span class="p">}</span></div><div class='line' id='LC1303'><br/></div><div class='line' id='LC1304'><br/></div><div class='line' id='LC1305'><span class="kd">var</span> <span class="nx">_EncodeEmailAddress</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">addr</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1306'><span class="c1">//</span></div><div class='line' id='LC1307'><span class="c1">//  Input: an email address, e.g. &quot;foo@example.com&quot;</span></div><div class='line' id='LC1308'><span class="c1">//</span></div><div class='line' id='LC1309'><span class="c1">//  Output: the email address as a mailto link, with each character</span></div><div class='line' id='LC1310'><span class="c1">//	of the address encoded as either a decimal or hex entity, in</span></div><div class='line' id='LC1311'><span class="c1">//	the hopes of foiling most address harvesting spam bots. E.g.:</span></div><div class='line' id='LC1312'><span class="c1">//</span></div><div class='line' id='LC1313'><span class="c1">//	&lt;a href=&quot;&amp;#x6D;&amp;#97;&amp;#105;&amp;#108;&amp;#x74;&amp;#111;:&amp;#102;&amp;#111;&amp;#111;&amp;#64;&amp;#101;</span></div><div class='line' id='LC1314'><span class="c1">//	   x&amp;#x61;&amp;#109;&amp;#x70;&amp;#108;&amp;#x65;&amp;#x2E;&amp;#99;&amp;#111;&amp;#109;&quot;&gt;&amp;#102;&amp;#111;&amp;#111;</span></div><div class='line' id='LC1315'><span class="c1">//	   &amp;#64;&amp;#101;x&amp;#x61;&amp;#109;&amp;#x70;&amp;#108;&amp;#x65;&amp;#x2E;&amp;#99;&amp;#111;&amp;#109;&lt;/a&gt;</span></div><div class='line' id='LC1316'><span class="c1">//</span></div><div class='line' id='LC1317'><span class="c1">//  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk</span></div><div class='line' id='LC1318'><span class="c1">//  mailing list: &lt;http://tinyurl.com/yu7ue&gt;</span></div><div class='line' id='LC1319'><span class="c1">//</span></div><div class='line' id='LC1320'><br/></div><div class='line' id='LC1321'>	<span class="kd">var</span> <span class="nx">encode</span> <span class="o">=</span> <span class="p">[</span></div><div class='line' id='LC1322'>		<span class="kd">function</span><span class="p">(</span><span class="nx">ch</span><span class="p">){</span><span class="k">return</span> <span class="s2">&quot;&amp;#&quot;</span><span class="o">+</span><span class="nx">ch</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;;&quot;</span><span class="p">;},</span></div><div class='line' id='LC1323'>		<span class="kd">function</span><span class="p">(</span><span class="nx">ch</span><span class="p">){</span><span class="k">return</span> <span class="s2">&quot;&amp;#x&quot;</span><span class="o">+</span><span class="nx">ch</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;;&quot;</span><span class="p">;},</span></div><div class='line' id='LC1324'>		<span class="kd">function</span><span class="p">(</span><span class="nx">ch</span><span class="p">){</span><span class="k">return</span> <span class="nx">ch</span><span class="p">;}</span></div><div class='line' id='LC1325'>	<span class="p">];</span></div><div class='line' id='LC1326'><br/></div><div class='line' id='LC1327'>	<span class="nx">addr</span> <span class="o">=</span> <span class="s2">&quot;mailto:&quot;</span> <span class="o">+</span> <span class="nx">addr</span><span class="p">;</span></div><div class='line' id='LC1328'><br/></div><div class='line' id='LC1329'>	<span class="nx">addr</span> <span class="o">=</span> <span class="nx">addr</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/./g</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">ch</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1330'>		<span class="k">if</span> <span class="p">(</span><span class="nx">ch</span> <span class="o">==</span> <span class="s2">&quot;@&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1331'>		   	<span class="c1">// this *must* be encoded. I insist.</span></div><div class='line' id='LC1332'>			<span class="nx">ch</span> <span class="o">=</span> <span class="nx">encode</span><span class="p">[</span><span class="nb">Math</span><span class="p">.</span><span class="nx">floor</span><span class="p">(</span><span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">()</span><span class="o">*</span><span class="mi">2</span><span class="p">)](</span><span class="nx">ch</span><span class="p">);</span></div><div class='line' id='LC1333'>		<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">ch</span> <span class="o">!=</span><span class="s2">&quot;:&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1334'>			<span class="c1">// leave &#39;:&#39; alone (to spot mailto: later)</span></div><div class='line' id='LC1335'>			<span class="kd">var</span> <span class="nx">r</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">random</span><span class="p">();</span></div><div class='line' id='LC1336'>			<span class="c1">// roughly 10% raw, 45% hex, 45% dec</span></div><div class='line' id='LC1337'>			<span class="nx">ch</span> <span class="o">=</span>  <span class="p">(</span></div><div class='line' id='LC1338'>					<span class="nx">r</span> <span class="o">&gt;</span> <span class="p">.</span><span class="mi">9</span>  <span class="o">?</span>	<span class="nx">encode</span><span class="p">[</span><span class="mi">2</span><span class="p">](</span><span class="nx">ch</span><span class="p">)</span>   <span class="o">:</span></div><div class='line' id='LC1339'>					<span class="nx">r</span> <span class="o">&gt;</span> <span class="p">.</span><span class="mi">45</span> <span class="o">?</span>	<span class="nx">encode</span><span class="p">[</span><span class="mi">1</span><span class="p">](</span><span class="nx">ch</span><span class="p">)</span>   <span class="o">:</span></div><div class='line' id='LC1340'>								<span class="nx">encode</span><span class="p">[</span><span class="mi">0</span><span class="p">](</span><span class="nx">ch</span><span class="p">)</span></div><div class='line' id='LC1341'>				<span class="p">);</span></div><div class='line' id='LC1342'>		<span class="p">}</span></div><div class='line' id='LC1343'>		<span class="k">return</span> <span class="nx">ch</span><span class="p">;</span></div><div class='line' id='LC1344'>	<span class="p">});</span></div><div class='line' id='LC1345'><br/></div><div class='line' id='LC1346'>	<span class="nx">addr</span> <span class="o">=</span> <span class="s2">&quot;&lt;a href=\&quot;&quot;</span> <span class="o">+</span> <span class="nx">addr</span> <span class="o">+</span> <span class="s2">&quot;\&quot;&gt;&quot;</span> <span class="o">+</span> <span class="nx">addr</span> <span class="o">+</span> <span class="s2">&quot;&lt;/a&gt;&quot;</span><span class="p">;</span></div><div class='line' id='LC1347'>	<span class="nx">addr</span> <span class="o">=</span> <span class="nx">addr</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;&gt;.+:/g</span><span class="p">,</span><span class="s2">&quot;\&quot;&gt;&quot;</span><span class="p">);</span> <span class="c1">// strip the mailto: from the visible part</span></div><div class='line' id='LC1348'><br/></div><div class='line' id='LC1349'>	<span class="k">return</span> <span class="nx">addr</span><span class="p">;</span></div><div class='line' id='LC1350'><span class="p">}</span></div><div class='line' id='LC1351'><br/></div><div class='line' id='LC1352'><br/></div><div class='line' id='LC1353'><span class="kd">var</span> <span class="nx">_UnescapeSpecialChars</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1354'><span class="c1">//</span></div><div class='line' id='LC1355'><span class="c1">// Swap back in all the special characters we&#39;ve hidden.</span></div><div class='line' id='LC1356'><span class="c1">//</span></div><div class='line' id='LC1357'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~E(\d+)E/g</span><span class="p">,</span></div><div class='line' id='LC1358'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1359'>			<span class="kd">var</span> <span class="nx">charCodeToReplace</span> <span class="o">=</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">m1</span><span class="p">);</span></div><div class='line' id='LC1360'>			<span class="k">return</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span><span class="nx">charCodeToReplace</span><span class="p">);</span></div><div class='line' id='LC1361'>		<span class="p">}</span></div><div class='line' id='LC1362'>	<span class="p">);</span></div><div class='line' id='LC1363'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1364'><span class="p">}</span></div><div class='line' id='LC1365'><br/></div><div class='line' id='LC1366'><br/></div><div class='line' id='LC1367'><span class="kd">var</span> <span class="nx">_Outdent</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1368'><span class="c1">//</span></div><div class='line' id='LC1369'><span class="c1">// Remove one level of line-leading tabs or spaces</span></div><div class='line' id='LC1370'><span class="c1">//</span></div><div class='line' id='LC1371'><br/></div><div class='line' id='LC1372'>	<span class="c1">// attacklab: hack around Konqueror 3.5.4 bug:</span></div><div class='line' id='LC1373'>	<span class="c1">// &quot;----------bug&quot;.replace(/^-/g,&quot;&quot;) == &quot;bug&quot;</span></div><div class='line' id='LC1374'><br/></div><div class='line' id='LC1375'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^(\t|[ ]{1,4})/gm</span><span class="p">,</span><span class="s2">&quot;~0&quot;</span><span class="p">);</span> <span class="c1">// attacklab: g_tab_width</span></div><div class='line' id='LC1376'><br/></div><div class='line' id='LC1377'>	<span class="c1">// attacklab: clean up hack</span></div><div class='line' id='LC1378'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~0/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">)</span></div><div class='line' id='LC1379'><br/></div><div class='line' id='LC1380'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1381'><span class="p">}</span></div><div class='line' id='LC1382'><br/></div><div class='line' id='LC1383'><span class="kd">var</span> <span class="nx">_Detab</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1384'><span class="c1">// attacklab: Detab&#39;s completely rewritten for speed.</span></div><div class='line' id='LC1385'><span class="c1">// In perl we could fix it by anchoring the regexp with \G.</span></div><div class='line' id='LC1386'><span class="c1">// In javascript we&#39;re less fortunate.</span></div><div class='line' id='LC1387'><br/></div><div class='line' id='LC1388'>	<span class="c1">// expand first n-1 tabs</span></div><div class='line' id='LC1389'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t(?=\t)/g</span><span class="p">,</span><span class="s2">&quot;    &quot;</span><span class="p">);</span> <span class="c1">// attacklab: g_tab_width</span></div><div class='line' id='LC1390'><br/></div><div class='line' id='LC1391'>	<span class="c1">// replace the nth with two sentinels</span></div><div class='line' id='LC1392'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\t/g</span><span class="p">,</span><span class="s2">&quot;~A~B&quot;</span><span class="p">);</span></div><div class='line' id='LC1393'><br/></div><div class='line' id='LC1394'>	<span class="c1">// use the sentinel to anchor our regex so it doesn&#39;t explode</span></div><div class='line' id='LC1395'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~B(.+?)~A/g</span><span class="p">,</span></div><div class='line' id='LC1396'>		<span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">,</span><span class="nx">m2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1397'>			<span class="kd">var</span> <span class="nx">leadingText</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">;</span></div><div class='line' id='LC1398'>			<span class="kd">var</span> <span class="nx">numSpaces</span> <span class="o">=</span> <span class="mi">4</span> <span class="o">-</span> <span class="nx">leadingText</span><span class="p">.</span><span class="nx">length</span> <span class="o">%</span> <span class="mi">4</span><span class="p">;</span>  <span class="c1">// attacklab: g_tab_width</span></div><div class='line' id='LC1399'><br/></div><div class='line' id='LC1400'>			<span class="c1">// there *must* be a better way to do this:</span></div><div class='line' id='LC1401'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">numSpaces</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="nx">leadingText</span><span class="o">+=</span><span class="s2">&quot; &quot;</span><span class="p">;</span></div><div class='line' id='LC1402'><br/></div><div class='line' id='LC1403'>			<span class="k">return</span> <span class="nx">leadingText</span><span class="p">;</span></div><div class='line' id='LC1404'>		<span class="p">}</span></div><div class='line' id='LC1405'>	<span class="p">);</span></div><div class='line' id='LC1406'><br/></div><div class='line' id='LC1407'>	<span class="c1">// clean up sentinels</span></div><div class='line' id='LC1408'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~A/g</span><span class="p">,</span><span class="s2">&quot;    &quot;</span><span class="p">);</span>  <span class="c1">// attacklab: g_tab_width</span></div><div class='line' id='LC1409'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/~B/g</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span></div><div class='line' id='LC1410'><br/></div><div class='line' id='LC1411'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1412'><span class="p">}</span></div><div class='line' id='LC1413'><br/></div><div class='line' id='LC1414'><br/></div><div class='line' id='LC1415'><span class="c1">//</span></div><div class='line' id='LC1416'><span class="c1">//  attacklab: Utility functions</span></div><div class='line' id='LC1417'><span class="c1">//</span></div><div class='line' id='LC1418'><br/></div><div class='line' id='LC1419'><br/></div><div class='line' id='LC1420'><span class="kd">var</span> <span class="nx">escapeCharacters</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">charsToEscape</span><span class="p">,</span> <span class="nx">afterBackslash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1421'>	<span class="c1">// First we have to escape the escape characters so that</span></div><div class='line' id='LC1422'>	<span class="c1">// we can build a character class out of them</span></div><div class='line' id='LC1423'>	<span class="kd">var</span> <span class="nx">regexString</span> <span class="o">=</span> <span class="s2">&quot;([&quot;</span> <span class="o">+</span> <span class="nx">charsToEscape</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/([\[\]\\])/g</span><span class="p">,</span><span class="s2">&quot;\\$1&quot;</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot;])&quot;</span><span class="p">;</span></div><div class='line' id='LC1424'><br/></div><div class='line' id='LC1425'>	<span class="k">if</span> <span class="p">(</span><span class="nx">afterBackslash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1426'>		<span class="nx">regexString</span> <span class="o">=</span> <span class="s2">&quot;\\\\&quot;</span> <span class="o">+</span> <span class="nx">regexString</span><span class="p">;</span></div><div class='line' id='LC1427'>	<span class="p">}</span></div><div class='line' id='LC1428'><br/></div><div class='line' id='LC1429'>	<span class="kd">var</span> <span class="nx">regex</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="nx">regexString</span><span class="p">,</span><span class="s2">&quot;g&quot;</span><span class="p">);</span></div><div class='line' id='LC1430'>	<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">regex</span><span class="p">,</span><span class="nx">escapeCharacters_callback</span><span class="p">);</span></div><div class='line' id='LC1431'><br/></div><div class='line' id='LC1432'>	<span class="k">return</span> <span class="nx">text</span><span class="p">;</span></div><div class='line' id='LC1433'><span class="p">}</span></div><div class='line' id='LC1434'><br/></div><div class='line' id='LC1435'><br/></div><div class='line' id='LC1436'><span class="kd">var</span> <span class="nx">escapeCharacters_callback</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">wholeMatch</span><span class="p">,</span><span class="nx">m1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1437'>	<span class="kd">var</span> <span class="nx">charCodeToEscape</span> <span class="o">=</span> <span class="nx">m1</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC1438'>	<span class="k">return</span> <span class="s2">&quot;~E&quot;</span><span class="o">+</span><span class="nx">charCodeToEscape</span><span class="o">+</span><span class="s2">&quot;E&quot;</span><span class="p">;</span></div><div class='line' id='LC1439'><span class="p">}</span></div><div class='line' id='LC1440'><br/></div><div class='line' id='LC1441'><span class="p">}</span> <span class="c1">// end of Showdown.converter</span></div><div class='line' id='LC1442'><br/></div><div class='line' id='LC1443'><br/></div><div class='line' id='LC1444'><span class="c1">// export</span></div><div class='line' id='LC1445'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">module</span> <span class="o">!==</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">Showdown</span><span class="p">;</span></div><div class='line' id='LC1446'><br/></div><div class='line' id='LC1447'><span class="c1">// stolen from AMD branch of underscore</span></div><div class='line' id='LC1448'><span class="c1">// AMD define happens at the end for compatibility with AMD loaders</span></div><div class='line' id='LC1449'><span class="c1">// that don&#39;t enforce next-turn semantics on modules.</span></div><div class='line' id='LC1450'><span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1451'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">(</span><span class="s1">&#39;showdown&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">Showdown</span><span class="p">;</span></div><div class='line' id='LC1453'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1454'><span class="p">}</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.09221s from github-fe119-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

