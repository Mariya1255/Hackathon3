import Image from "next/image";

export interface Product {
    _id : string;
    name : string;
    type : "Product";
    image : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    price :  number;
    description : string;
    slug : {
        _type : "slug"
        current : string;
    };
    discountPercentage : number;
    isFeaturedProduct : string;
    stockLevel : number;
    category : string;
}