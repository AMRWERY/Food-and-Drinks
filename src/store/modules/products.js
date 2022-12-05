export default {
  namespaced: true,

  state() {
    return {
        products: [
            {
                id: 'p1',
                image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg',
                title: 'Testy Burger',
                description: 'High quality beef medium to well with cheese and bacon on a multigrain bun.',
                price: 8.99
            },
            {
                id: 'p2',
                image: 'https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=509&height=340',
                title: 'Pizza',
                description: 'Pizza high stuff.',
                price: 19.99
            },
            {
                id: 'p3',
                image: 'https://img.cuisineaz.com/660x660/2013/12/20/i34581-salade-nicoise-rapide.jpeg',
                title: 'Healthy Salade',
                description: 'Try our healthy Salade.',
                price: 5.65
            },
            {
                id: 'p4',
                image: 'https://cdn.britannica.com/33/206333-050-598A0208/sodas-plastic-cups-ice-straws.jpg',
                title: 'Soft Drinks',
                description: 'Best Soft Drinks.',
                price: 2.50
            }
        ]
    }
},

  /* getters: {
    products(state) {
      return state.products;
    }
  } */
};
