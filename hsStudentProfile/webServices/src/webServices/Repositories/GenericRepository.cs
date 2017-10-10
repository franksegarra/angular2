using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using webServices.Entities;
using webServices.Infrastructure;

namespace webServices.Repositories
{
    //From: https://www.codeproject.com/articles/990492/restful-day-sharp-enterprise-level-application#_Toc418969124

    public class GenericRepository<T> : IEntityBaseRepository<T>
            where T : class, IEntityBase, new()
    {
        #region Private member variables...
        private hsPlayerProfileContext _context;
        internal DbSet<T> DbSet;
        #endregion

        #region Public Constructor...
        public GenericRepository(hsPlayerProfileContext context)
        {
            this._context = context;
            this.DbSet = context.Set<T>();
        }
        #endregion

        #region Public member methods...

        public virtual IEnumerable<T> GetAll()
        {
            IQueryable<T> query = DbSet;
            return query.ToList();
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            IQueryable<T> query = DbSet;
            return await query.ToListAsync();
        }

        public virtual T GetSingle(int id)
        {
            return DbSet.Find(id);
        }

        public async Task<T> GetSingleAsync(int id)
        {
            return await DbSet.FindAsync(id);
        }

        public virtual IEnumerable<T> FindBy(Expression<Func<T, bool>> predicate)
        {
            return DbSet.Where(predicate);
        }

        public virtual async Task<IEnumerable<T>> FindByAsync(Expression<Func<T, bool>> predicate)
        {
            //TODO: Convert to dbset
            return await _context.Set<T>().Where(predicate).ToListAsync();
        }

        public virtual void Add(T entity)
        {
            DbSet.Add(entity);
            _context.SaveChanges();
        }

        public virtual async Task AddAsync(T entity)
        {
            DbSet.Add(entity);
            await _context.SaveChangesAsync();
        }

        public virtual void Delete(int id)
        {
            T entityToDelete = DbSet.Find(id);
            Delete(entityToDelete);
            _context.SaveChanges();
        }

        public virtual async Task DeleteAsync(int id)
        {
            T entityToDelete = DbSet.Find(id);
            Delete(entityToDelete);
            await _context.SaveChangesAsync();
        }
        
        public virtual void Delete(T entityToDelete)
        {
            if (_context.Entry(entityToDelete).State == EntityState.Detached)
            {
                DbSet.Attach(entityToDelete);
            }
            DbSet.Remove(entityToDelete);
            _context.SaveChanges();
        }

        public virtual async Task DeleteAsync(T entityToDelete)
        {
            if (_context.Entry(entityToDelete).State == EntityState.Detached)
            {
                DbSet.Attach(entityToDelete);
            }
            DbSet.Remove(entityToDelete);
            await _context.SaveChangesAsync();
        }

        public virtual void Edit(T entityToUpdate)
        {
            DbSet.Attach(entityToUpdate);
            _context.Entry(entityToUpdate).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public virtual async Task EditAsync(T entityToUpdate)
        {
            DbSet.Attach(entityToUpdate);
            _context.Entry(entityToUpdate).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public virtual void Commit()
        {
            _context.SaveChanges();
        }


        #endregion
    }

}
