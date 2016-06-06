lib.slider = HMENU
lib.slider {
  special = directory
  special.value.data = leveluid:-2
  wrap = <nav class="csc-default layout-0 menu"><div class="page-slider clearfix">|</div></nav>

  1 = TMENU
  1.NO.doNotLinkIt = 1
  1.NO.stdWrap.cObject = COA
  1.NO.stdWrap.cObject {
    10 = TEXT
    10.value = <div class="slide clearfix"
    
    20 = TEXT
    20.field = uid
    20.wrap = data-uid="|"

    25 = TEXT
    25.field = title
    25.wrap = data-title="|"

    30 = TEXT
    30.field = subtitle
    30.wrap = data-subtitle="|"

    35 = TEXT
    35.field = layout
    35.wrap = data-layout="|"

    40 = TEXT
    40.typolink {
      parameter.field = uid
      returnLast = url
    }
    40.wrap = data-url="|"
    

    41 = TEXT
    41.value = >
    
    45 = TEXT
    45.value = <div class="header-container"><div class="header"><div class="header_content">

    50 = CONTENT
    50 {
      table = tt_content

      select {
       pidInList.data = field:uid
       where = colPos = 1
    
      }
    }
   50.wrap = <div class="header-right header-col">|</div>

55 = COA
55 {
    10 = TEXT
    10.value = <div class="header-left header-col">
    20 < lib.langMenu
    30 < lib.siblings
    40 = TEXT
    40.value = </div>
}
  
57 = TEXT
57.value = </div></div></div>            
                

    60 = CONTENT
    60 {
      table = tt_content

      select {
       pidInList.data = field:uid
       where = colPos = 2
    
      }
    }
   60.wrap = <div class="slide-content">|</div>

   80 = TEXT
   80.value = </div>
   
  }
}
