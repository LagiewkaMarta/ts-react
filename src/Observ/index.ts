import * as Rx from "rxjs";

export const foo = () => {
    const subscribe = (observer:any) => {
        try {
            setInterval(() => (
                observer.next('in progress')
            ), 1000)
        } catch (error) {
            observer.error(error)
        }
    
     setTimeout(() => {
        observer.unsubscribe();
    }, 5000);
}
   const observable = Rx.Observable.create(subscribe);
   observable.subscribe((x:any) => console.log(x), (err: any) => console.log('err'), () => console.log('finished'));
};