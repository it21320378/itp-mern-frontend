import backgroundimg from "../../assets/backgroundimg.jpg";
import yellow from "../../assets/yellow.jpg"
import { forwardRef } from "react"

import Admin_Warehouse_Showroom from "../../components/Admin_Warehouse&Showroom"
import Admin_Packaging_Labeling from "../../components/Admin_Packaging&Labeling"
import Admin_Supplier_Rawmaterial from "../../components/Admin_Supplier&Rawmaterial"
import Admin_Delivery from "../../components/Admin_Delivery"
import Admin_Financial from "../../components/Admin_Financial"
import Admin_SupportService from "../../components/Admin_SupportService"

const LandingPageGrid = forwardRef((props, ref) => {
  return (
    <div
      style={{
        height: "130vh",
        backgroundImage: `url(${yellow})`,
        // backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      }}
      ref={ref}
    >
      {/*First Row*/}
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Admin_Warehouse_Showroom />

        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Adjust the margin as needed */}
          <Admin_Packaging_Labeling />
        </div>

        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Adjust the margin as needed */}
          <Admin_Supplier_Rawmaterial />
        </div>
      </div>

      {/*Second Row*/}
      <div style={{ display: "flex" }}>
        <Admin_Delivery />

        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Adjust the margin as needed */}
          <Admin_Financial />
        </div>

        <div style={{ marginLeft: "20px" }}>
          {" "}
          {/* Adjust the margin as needed */}
          <Admin_SupportService />
        </div>
      </div>
    </div>
  )
})

export default LandingPageGrid
