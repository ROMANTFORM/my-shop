import {makeAutoObservable} from "mobx";

export default class UserStore {
    _types = [
        {id: 1, name: "TV"},
        {id: 2, name: "phones"},
        {id: 3, name: "laptops"},
        {id: 4, name: "microwaves"},
    ]
    _brands = [
        {id: 1, name: "samsung"},
        {id: 2, name: "apple"},
        {id: 3, name: "huawei"},
        {id: 4, name: "asus"},
        
    ]
    _devices = [
        {id: 1, name: "IPhone 14 pro", price: 12000, rating: 5, img: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1"},
        {id: 2, name: "IPhone 14 pro", price: 12000, rating: 5, img: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1"},
        {id: 3, name: "IPhone 14 pro", price: 12000, rating: 5, img: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1"},
        {id: 4, name: "IPhone 14 pro", price: 12000, rating: 5, img: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1"},
        {id: 5, name: "IPhone 14 pro", price: 12000, rating: 5, img: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1"},
        {id: 6, name: "IPhone 14 pro", price: 12000, rating: 5, img: "https://www.reliancedigital.in/medias/iPhone-14-Pro-Deep-Purple-PDP-Image-493177782-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjk4MnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDAyLzEwMDE2OTIyMTczNDcwLmpwZ3xmNTU5ZTAwMzRmYmU5MWU2ODIzMjU5NjEwNTc3NjI1YWJkMjU2OGYxZDllNWM4ZmE3NTkxZGFlMzk5YmQyNTQ1"},
    ]
    _selectedType = {}
    _selectedBrand = {}

    constructorI(){
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types   
    }
    setBrands(brands) {
        this._brands = brands   
    }
    setDevices(devices) {
        this._devices = devices   
    }
    setSelectedType(type){
        // console.log(type)
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }

};

