import CMS from "netlify-cms-app"
import { MdxControl, MdxPreview, setupPreview } from "netlify-cms-widget-mdx"

CMS.registerWidget("mdx", MdxControl, MdxPreview)
