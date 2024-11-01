    import React from "react";
    import ProductForm from "../components/ProductForm";
    
    const Dashboard = () => {
      return (
        <div className="bg-gradient-to-b from-blue-950 to-50% via-blue-500 to-70% to-blue-50 to-71% ">
            <h1 className="text-5xl font-bold text-center font-mono underline underline-offset-8 pt-10">Dashboard</h1>
            <div className="p-28" >
              <ProductForm />
            </div>
        </div>
      );
    };  

    export default Dashboard;