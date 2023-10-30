import create from "zustand";
import { v4 as uuidv4 } from "uuid";

export enum ResourceType {
  URL = "URL",
  IMG = "IMG",
}
export interface Resource {
  id: string;
  // origin url or img
  resource: string;
  // url or imgage
  type: ResourceType | null;
  edit: boolean;
  // show text
  title: string;
  createdTime: string;
}

const updateResource = (
  resources: Resource[],
  id: string,
  title: string
): Resource[] =>
  resources.map((resource) => ({
    ...resource,
    title: resource.id === id ? title : resource.title,
  }));

const toggleResource = (resources: Resource[], id: string): Resource[] =>
  resources.map((resource) => ({
    ...resource,
    edit: resource.id === id ? !resource.edit : false,
  }));

const removeResource = (resources: Resource[], id: string): Resource[] =>
  resources.filter((resource) => resource.id !== id);

const addResource = (
  resources: Resource[],
  resoure: string,
  title?: string
): Resource[] => [
  ...resources,
  {
    id: uuidv4(),
    type: title ? ResourceType.IMG : ResourceType.URL,
    resource: resoure,
    title: title ?? resoure,
    edit: false,
    createdTime: new Date().toISOString(),
  },
];

const setViewer = (resources: Resource[], id: string): Resource =>
  resources.find((resource) => resource.id === id) ?? {
    id: "",
    title: "",
    resource: "",
    type: null,
    edit: false,
    createdTime: "",
  };
// const addImgResource = (resources: Resource[], )

// Zustand
type Store = {
  resources: Resource[];
  newResource: string;
  viewer: Resource;
  addResource: (title?: string) => void;
  setNewResource: (resource: string) => void;
  update: (id: string, title: string) => void;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  setView: (id: string) => void;
  removeView: () => void;
};

const useStore = create<Store>((set) => ({
  resources: [],
  newResource: "",
  viewer: {
    id: "",
    title: "",
    resource: "",
    type: null,
    edit: false,
    createdTime: "",
  },
  addResource(title?: string) {
    set((state) => ({
      ...state,
      resources: addResource(state.resources, state.newResource, title),
      newResource: "",
    }));
  },
  setNewResource(resource: string) {
    set((state) => ({
      ...state,
      newResource: resource,
    }));
  },
  update(id: string, title: string) {
    set((state) => ({
      ...state,
      resources: updateResource(state.resources, id, title),
    }));
  },
  toggle(id: string) {
    set((state) => ({
      ...state,
      resources: toggleResource(state.resources, id),
    }));
  },
  remove(id: string) {
    set((state) => ({
      ...state,
      resources: removeResource(state.resources, id),
    }));
  },
  setView(id: string) {
    set((state) => ({
      ...state,
      state.viewer: setViewer(state.resource, id)
    }))
  },
  removeView(){
    set((state) => ({
      ...state,
      state.viewer:  {
        id: "",
        title: "",
        resource: "",
        type: null,
        edit: false,
        createdTime: "",
      }
    }))
  }
}));

export default useStore;
