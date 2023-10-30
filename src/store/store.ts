import create from 'zustand';
import { v4 as uuidv4} from 'uuid'

export interface Resource {
    id: string;
    // origin url or img
    resource: string;
    edit: boolean;
    // show text
    title: string;
    createdTime: string;
}

const updateResource = (resources: Resource[], id: string, title: string): Resource[] => 
    resources.map((resource) => ({
        ...resource,
        title: resource.id === id ? title : resource.title
    }));


const toggleResource = (resources: Resource[], id: string): Resource[] =>
    resources.map((resource) => ({
        ...resource,
        edit: resource.id === id ? !resource.edit : resource.edit
    }))


const removeResource = (resources: Resource[], id: string): Resource[] =>
    resources.filter((resource) => resource.id !== id)


const addResource = (resources: Resource[], resoure:string): Resource[] => [
    ...resources,
    {
        id: uuidv4(),
        resource: resoure,
        title: resoure,
        edit: false,
        createdTime: new Date().toISOString()
    }
]

// Zustand
type Store = {
    resources: Resource[],
    newResource: string,
    addResource: () => void,
    setNewResource: (resource: string) => void,
    update: (id: string, title: string) => void,
    toggle: (id: string) => void
    remove: (id: string) => void
}

const useStore = create<Store>((set) => ({
    resources: [],
    newResource: "",
    addResource() {
        set(state => ({
            ...state,
            resources: addResource(state.resources, state.newResource),
            newResource: ""
        }));
    },
    setNewResource(resource: string) {
        set(state => ({
            ...state,
            newResource: resource
        }));
    },
    update(id: string, title: string) {
        set((state) => ({
            ...state,
            resources: updateResource(state.resources, id, title)
        }))
    },
    toggle(id: string) {
        set((state) => ({
            ...state,
            resources: toggleResource(state.resources, id)
        }))
    },
    remove(id: string) {
        set((state) => ({
            ...state,
            resources: removeResource(state.resources,id)
        }))
    }
}))

export default useStore;