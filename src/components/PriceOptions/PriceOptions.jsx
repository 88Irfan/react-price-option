import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {



    const priceOption = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting equipment",
                "Group fitness classes",
                "Locker room access",
                "Shower facilities",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
                "Access to all basic membership features",
                "Access to sauna and spa facilities",
                "Personalized training sessions",
                "Towel service",
                "Discounts on merchandise"
            ]
        },
        {
            "id": 3,
            "name": "VIP Membership",
            "price": "$99.99/month",
            "features": [
                "Access to all premium membership features",
                "Priority booking for classes and facilities",
                "Nutritional counseling sessions",
                "Complimentary beverages",
                "Access to exclusive VIP lounge",
                "Guest passes"
            ]
        }
    ]


    return (
        <div className="m-12">
            <h2 className="text-5xl">Best price options in the twon</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    priceOption.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;