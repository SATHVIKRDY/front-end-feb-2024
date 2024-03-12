function displayGadgets(){
    let allGadgets = [
        {
            gadgetId: 1001,
            gadgetName: "Dell Inspiron 14 5000",
            gadgetCategory: "Laptop",
            gadgetCost: 60000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1002,
            gadgetName: "iPad Air2",
            gadgetCategory: "Tablet",
            gadgetCost: 80000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            gadgetId: 1003,
            gadgetName: "Galaxy S23",
            gadgetCategory: "Mobile",
            gadgetCost: 70000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1004,
            gadgetName: "iPhone 14",
            gadgetCategory: "Mobile",
            gadgetCost: 65000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1005,
            gadgetName: "Dell Inspiron 14 5000",
            gadgetCategory: "Laptop",
            gadgetCost: 60000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1006,
            gadgetName: "iPad Air2",
            gadgetCategory: "Tablet",
            gadgetCost: 80000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            gadgetId: 1007,
            gadgetName: "Galaxy S23",
            gadgetCategory: "Mobile",
            gadgetCost: 70000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1008,
            gadgetName: "iPhone 14",
            gadgetCategory: "Mobile",
            gadgetCost: 65000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1009,
            gadgetName: "Dell Inspiron 14 5000",
            gadgetCategory: "Laptop",
            gadgetCost: 60000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1010,
            gadgetName: "iPad Air2",
            gadgetCategory: "Tablet",
            gadgetCost: 80000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            gadgetId: 1011,
            gadgetName: "Galaxy S23",
            gadgetCategory: "Mobile",
            gadgetCost: 70000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1012,
            gadgetName: "iPhone 14",
            gadgetCategory: "Mobile",
            gadgetCost: 65000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1013,
            gadgetName: "Dell Inspiron 14 5000",
            gadgetCategory: "Laptop",
            gadgetCost: 60000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1014,
            gadgetName: "iPad Air2",
            gadgetCategory: "Tablet",
            gadgetCost: 80000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }, 
        {
            gadgetId: 1015,
            gadgetName: "Galaxy S23",
            gadgetCategory: "Mobile",
            gadgetCost: 70000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            gadgetId: 1016,
            gadgetName: "iPhone 14",
            gadgetCategory: "Mobile",
            gadgetCost: 65000,
            gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    // traverse through the allGadgets array and display them
    let data = '';
    for(let eachGadget of allGadgets){
        data += `<div class='flex-item'>
                    <img src='${eachGadget.gadgetImageUrl}'>
                    <h4>Gadget Name: ${eachGadget.gadgetName}</h4>
                    <p>Gadget Category: ${eachGadget.gadgetCategory}</p>
                    <p>Gadget Cost: ${eachGadget.gadgetCost}</p>
                </div>`;
    }
    document.getElementById("flex-container").innerHTML = data;
}