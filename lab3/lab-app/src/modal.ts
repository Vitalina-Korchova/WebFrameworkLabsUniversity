export class Modal {
    
    static showBorrowModal(btnBorrow: HTMLElement): void {
        btnBorrow.addEventListener('click', () => {
            const modalBorrow = document.getElementById('modalBorrow') as HTMLElement;
            if (modalBorrow) {
                modalBorrow.style.display = 'block';
                const closeButtonModal = document.getElementById('btn_close_modal') as HTMLElement;
                if (closeButtonModal) {
                    this.closeBorrowModal(closeButtonModal);
                }
            }
        });
    }
    

    static closeBorrowModal(btnCloseModal:HTMLElement):void{
        btnCloseModal.addEventListener('click', ()=>{
            const modalBorrow = document.getElementById('modalBorrow') as HTMLElement;
            modalBorrow.style.display = 'none';
        });
    }
    
    static hideBorrowModal():void{
        const modalBorrow = document.getElementById('modalBorrow') as HTMLElement;
        modalBorrow.style.display = 'none';
    }
    
    static showErrorModal(): void {
        const modalFail = document.getElementById('modalBorrowFail') as HTMLElement;
        modalFail.style.display = 'block';
    
        const closeButtonFail = document.getElementById('btn_close_modal_fail') as HTMLElement;
        closeButtonFail.addEventListener('click', () => {
            modalFail.style.display = 'none';
        });
    }

    static showSuccessModal(): void {
        const modalSuccess = document.getElementById('modalBorrowSuccess') as HTMLElement;
        modalSuccess.style.display = 'block';
    
        const closeButtonSuccess = document.getElementById('btn_close_modal_success') as HTMLElement;
        closeButtonSuccess.addEventListener('click', () => {
            modalSuccess.style.display = 'none';
        });
    }
    
    
}