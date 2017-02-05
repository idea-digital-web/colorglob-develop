import './js/vendors/modernizr.js'
import './js/vendors/selectivizr.js'
import './js/vendors/jquery.tipsy.js'
import customTipsy from './js/lib/customTipsy'
import flexslider from './js/vendors/jquery.flexslider.js'
import flexsliderPrincipal from './js/lib/flexsliderPrincipal'
// import addFlexsliderProducts from './js/lib/addFlexsliderProducts'
// import flexsliderProducts from './js/lib/flexsliderProducts'
// import addViewDetails from './js/lib/addViewDetails'
import menuDropdown from './js/lib/menuDropdown'
import addBorderBottom from './js/lib/addBorderBottom'
import changueAttr from './js/lib/changueAttr'
import addAttr from './js/lib/addAttr'
import stickyNavbarPrimary from './js/lib/stickyNavbarPrimary'
// import stickyNavbarSecondary from './js/lib/stickyNavbarSecondary'
import singleProduct from './js/lib/singleProduct'

(() => {
  'use strict'

  document.addEventListener('DOMContentLoaded', onDOMLoad)

  function onDOMLoad () {
    menuDropdown()
    addBorderBottom()
    customTipsy()
    flexslider()
    flexsliderPrincipal()
    // addFlexsliderProducts()
    // flexsliderProducts()
    // addViewDetails()
    changueAttr()
    addAttr()
    stickyNavbarPrimary()
    // stickyNavbarSecondary()
    singleProduct()
  }
})()
