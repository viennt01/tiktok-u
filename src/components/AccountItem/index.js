import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fdad1-3.fna.fbcdn.net/v/t1.6435-1/148189210_1373285796354430_856410685189195251_n.jpg?stp=dst-jpg_p120x120&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3NnmA6Y4EuAAX-yzt2W&_nc_ht=scontent.fdad1-3.fna&oh=00_AT9hz-iy0QoEjXid-A53wTCCx2KDwJAo-_fzE3shQqQPsg&oe=62E300AC"
                alt="Viênn"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Thanh Viên</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenthanhvien</span>
            </div>
        </div>
    );
}

export default AccountItem;
