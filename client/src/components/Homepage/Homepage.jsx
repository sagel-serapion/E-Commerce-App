import NavBar from "./NavBar.jsx";
import Banner from "./Banner.jsx";

import { useEffect } from "react";

import { styled, Box } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions.js";

import { useDispatch, useSelector } from "react-redux";

import Slide from "./Slide.jsx";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection.jsx";

const Component = styled(Box)`
padding: 10px 10px;
background: #F2F2F2;
`;

const Home = () => {

    const { products } = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const dealOfDay = products.filter(p =>
        ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7'].includes(p.id)
    );

    const watches = products.filter(p =>
        ['product8', 'product9', 'product10', 'product11', 'product12'].includes(p.id)
    );

    const appliances = products.filter(p =>
        ['product18', 'product19', 'product20', 'product21', 'product22'].includes(p.id)
    );

    const headphones = products.filter(p =>
        ['product23', 'product24', 'product25', 'product26', 'product27'].includes(p.id)
    );

    return (
        <> 
            <NavBar />
            <Component>
              <Banner />
              <MidSlide products={dealOfDay} title={"Deal of the Day "} timer={true} />
              <MidSection />
              <Slide products={watches} title={"Watches for you"} timer={false} />
              <Slide products={products} title={"Fitness Gears"} timer={false} />
              <Slide products={appliances} title={"Home Appliances"} timer={false} />
              <Slide products={headphones} title={"Headphones"} timer={false} />
            </Component>
        </>
    );
}

export default Home;
