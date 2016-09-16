module.exports = {
    core: {
        type:{
            Fabric: 'fabrics',
            Textile: 'textiles',
            Accessories: 'accessories',
            Buyer: 'buyers',
            Supplier: 'suppliers',
            uom: 'unit-of-measurements',
            Sparepart:'spareparts',
            GeneralMerchandise:'general-merchandises'
        },
        collection:{
            Buyer: 'buyers',
            Supplier: 'suppliers',
            uom: 'unit-of-measurements',
            Product: 'products',
            Unit:'unit',
            Category:'category'
        }
    },
    po:{
        type:{
            POGarmentJobOrderFabric: 'po-garment-job-order-fabric',
            POGarmentJobOrderAccessories: 'po-garment-job-order-accessories',
            POGarmentFabric: 'po-garment-fabric',
            POGarmentAccessories: 'po-garment-accessories',
            POGarmentSparepart: 'po-garment-sparepart',
            POGarmentGeneral: 'po-garment-general',
            POTextile: 'po-textile',
            POTextileSparepart: 'po-textile-sparepart',
            POTextileGeneralATK: 'po-textile-general-atk',
            POTextileGeneralOtherATK: 'po-textile-general-other-atk',
            POTextileJobOrderExternal: 'po-textile-job-order-external'
        },
        collection:{
            PurchaseOrder:'purchase-orders',
            PurchaseOrderGroup:'purchase-order-groups'
        }
    }
}
