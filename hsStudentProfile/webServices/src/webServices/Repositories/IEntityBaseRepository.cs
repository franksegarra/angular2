using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using webServices.Entities;

namespace webServices.Repositories
{
    public interface IEntityBaseRepository<T> where T : class, IEntityBase, new()
    {
        IEnumerable<T> GetAll();
        Task<IEnumerable<T>> GetAllAsync();
        T GetSingle(int id);
        Task<T> GetSingleAsync(int id);
        void Add(T entity);
        void Delete(T entity);
        void Edit(T entity);
        void Commit();
        IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate);
        Task<IEnumerable<T>> FindByAsync(Expression<Func<T, bool>> predicate);

        //IEnumerable<T> AllIncluding(params Expression<Func<T, object>>[] includeProperties);
        //Task<IEnumerable<T>> AllIncludingAsync(params Expression<Func<T, object>>[] includeProperties);
        //T GetSingle(Expression<Func<T, bool>> predicate);
        //T GetSingle(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includeProperties);
    }
}
