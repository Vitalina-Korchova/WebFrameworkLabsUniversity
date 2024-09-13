export class Modal {
    
    static showBorrowModal(btnBorrow:HTMLElement):void{
        btnBorrow.addEventListener('click', ()=>{
            const modalBorrow = document.getElementById('modalBorrow') as HTMLElement;
            modalBorrow.style.display = 'block';

            const closeButtonModal = document.getElementById('btn_close_modal') as HTMLElement;
            this.closeBorrowModal(closeButtonModal);
        });
        
    }

    static closeBorrowModal(btnCloseModal:HTMLElement):void{
        btnCloseModal.addEventListener('click', ()=>{
            const modalBorrow = document.getElementById('modalBorrow') as HTMLElement;
            modalBorrow.style.display = 'none';
        });
    }
    
}