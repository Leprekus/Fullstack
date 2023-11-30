interface IAuthor {
    name: string; 
    image: {
      _type: 'image';
      asset : {
          url: string;
          _ref: string
      }
    };
    bio: string; 
  }

interface IBlogPost {
    _updatedAt: string;
    author : IAuthor;
    _createdAt: string; 
    _type: string; 
    _id: string;
    title: string;
    categories: {
    title: string;
    slug: {
      current: string;
      _type: string;
    }
  }[];
    slug: {
        current: string;
        _type: 'slug';
    },
    body: {
      
    }
    mainImage :  {
      _type: string;
      asset: {
        _ref: string;
        type: string
      }
    }
  }

  interface ICategory {
    _createdAt:string;
    _rev:string;
    _type:string;
    description:string;
    _id:string;
    title:string;
    _updatedAt:string;
    Execution:string;
    posts: IBlogPost[];
    slug: {
      current: string;
      _type: string;
    }


  }
  type Page = "" | "AboutMe" | "Projects" | "Techstack";

